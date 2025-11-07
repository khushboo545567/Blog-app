import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Like } from "../models/like.model.js";

// who like the post or comment userid, postid, or commentid , but how do i know ids is post one or comment one
const like = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const likedId = req.param;
  const onWhatLiked = req.param;
  const liking = await Like.create({
    targetId: likedId,
    likedBy: userId,
    targetModel: onWhatLiked,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, "user liked post / comment successfully"));
});

export { like };
