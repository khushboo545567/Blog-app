import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Comment } from "../models/comment.model.js";
import { constants } from "crypto";

// get the userId who commented  , get teh id of post , like count , what is the comment
const comment = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const postId = req.params;
  const { text } = req.body;

  const commented = await Comment.create({
    commentedBy: userId,
    commentOnPost: postId,
    likecount,
    text,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, commented, "user commented successfully on post")
    );
});

export { comment };
