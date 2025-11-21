import asyncHandler from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { ApiError } from "../utils/apiError.js";
import { Like } from "../models/like.model.js";
import { Post } from "../models/post.model.js";
import { Comment } from "../models/comment.model.js"; // if exists

const like = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { postOrCommentId, targetModel } = req.params;

  // console.log("checking the ids -> ", postOrCommentId, targetModel);

  //   validate target model
  if (!["Post", "Comment"].includes(targetModel)) {
    throw new ApiError(
      400,
      "Invalid target model it should be post, or comment"
    );
  }

  //   check if already exists
  const existingLike = await Like.findOne({
    likedBy: userId,
    targetId: postOrCommentId,
    targetModel,
  });
  //   if the user liked then unlike the post
  if (existingLike) {
    // unlike
    await existingLike.deleteOne();

    // decrement like count
    if (targetModel === "Post") {
      await Post.findByIdAndUpdate(postOrCommentId, {
        $inc: { likesCount: -1 },
      });
    } else {
      await Comment.findByIdAndUpdate(postOrCommentId, {
        $inc: { likeCount: -1 },
      });
    }

    return res
      .status(200)
      .json(new ApiResponse(200, null, `${targetModel} unliked successfully `));
  }
  //   like

  await Like.create({
    likedBy: userId,
    targetId: postOrCommentId,
    targetModel,
  });

  if (targetModel === "Post") {
    await Post.findByIdAndUpdate(postOrCommentId, {
      $inc: { likesCount: 1 },
    });
  } else {
    await Comment.findByIdAndUpdate(postOrCommentId, {
      $inc: { likeCount: 1 },
    });
  }

  return res
    .status(200)
    .json(new ApiResponse(200, null, `${targetModel} liked successfully`));
});

export { like };
