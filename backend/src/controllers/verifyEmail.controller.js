import crypto from "crypto";
import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";

// verify email
const verifyEmail = asyncHandler(async (req, res) => {
  const token = req.query.token;
  if (!token) {
    throw new ApiError(400, "missing or invalid token  !");
  }
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  console.log(hashedToken);
  const user = await User.findOne({
    emailVerificationToken: hashedToken,
    emailExpiryVerificationToken: { $gt: Date.now() },
  });

  if (!user) {
    throw new ApiError(400, "invalid or expired token !");
  }

  user.isEmailVerified = true;
  user.emailVerificationToken = undefined;
  user.emailExpiryVerificationToken = undefined;

  await user.save();

  return res
    .status(200)
    .json(new ApiResponse(200, "Email verified successfully !"));
});

export { verifyEmail };
