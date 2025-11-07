import asyncHandler from "../utils/asyncHandler.js";
import { Follow } from "../models/follow.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

const follow = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const authorId = req.param;

  const following = await Follow.create({});
  return res
    .status(200)
    .json(new ApiResponse(200, following, "user followed authro successfully"));
});

export { follow };
