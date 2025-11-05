import { User } from "../models/user.model.js";
import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { uploadOnCloudnary } from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { Role } from "../models/roles.model.js";
import {
  emailVerificationContent,
  forgetPasswordMailgenContent,
  sendMail,
} from "../utils/mail.js";

// GENERATE ACCESS AND REFRESH TOKEN
const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    // / Call the methods to generate tokens
    const AccessToken = user.generateAccessToken();
    const RefreshToken = user.generateRefershToken();
    await user.save({ validateBeforeSave: false });

    // // Store refresh token in DB (if you want)
    user.refreshToken = RefreshToken;
    return { AccessToken, RefreshToken };
  } catch (error) {
    throw new ApiError(
      500,
      "something went wrong while generate the refresh token"
    );
  }
};

// ✅ REGISTER USER CONTROLLER
const registerUser = asyncHandler(async (req, res) => {
  const { userName, email, password, bio } = req.body;

  // Check if user already exists
  const existedUser = await User.findOne({ email });
  if (existedUser) {
    throw new ApiError(409, "User already exists");
  }

  //  Assign role (find from Role collection)
  const userRole = await Role.findOne({ name: "user" });
  if (!userRole) {
    throw new ApiError(500, "Default role 'user' not found in database");
  }

  // Create user object
  const user = new User({
    userName,
    email,
    password,
    bio,
    role: userRole._id,
  });

  // Upload avatar to Cloudinary if provided
  if (req.file?.path) {
    const avatarUrl = await uploadOnCloudnary(req.file.path);
    if (avatarUrl) user.avatar = avatarUrl;
  }

  // Generate email verification token
  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();

  user.emailVerificationToken = hashedToken;
  user.emailExpiryVerificationToken = tokenExpiry;

  // save user before sending email
  await user.save({ validateBeforeSave: false });

  // Generate verification link (frontend or backend endpoint)
  const verificationUrl = `http://localhost:3000/api/v1/users/verify-email?token=${unHashedToken}`;

  // Send verification email
  const mailgenContent = emailVerificationContent(userName, verificationUrl);
  await sendMail({
    email,
    subject: "Verify your email address",
    mailgenContent,
  });

  // Send success response
  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        "User registered successfully! Verification email sent.",
        user
      )
    );
});

// LOGIN USER
const loginUser = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;

  const user = await User.findOne({
    $or: [{ userName: userName }, { email: email }],
  });
  if (!user) {
    throw new ApiError(400, "User does not exist");
  }

  // check the password is correct or not
  const iscorrect = await user.isPasswordCorrect(password);
  if (!iscorrect) {
    throw new ApiError(400, "invalid creadientials");
  }

  if (!user.isEmailVerified) {
    throw new ApiError(400, "your email is not verified yet ");
  }

  // generate token
  const { AccessToken, RefreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  const Options = { httpOnly: true, secure: true };
  const userData = {
    userName: user.userName,
    email: user.email,
    role: user.role,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
  return res
    .status(200)
    .cookie("accessToken", AccessToken, Options)
    .cookie("refreshToken", RefreshToken, Options)
    .json(
      new ApiResponse(
        200,
        { user: userData, AccessToken, RefreshToken },
        "user logged in successfully"
      )
    );
});

// LOGOUT USER
const logoutUser = asyncHandler(async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: "" },
    },
    { new: true }
  );

  const Options = { httpOnly: true, secure: true };

  return res
    .status(200)
    .clearCookie("accessToken", Options)
    .clearCookie("refreshToken", Options)
    .json(new ApiResponse(200, {}, "user loggedout seccessfully !"));
});

// GET CURRENT USER
const getCurrentUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  return res
    .status(200)
    .json(new ApiResponse(200, user, "user fetched successfully "));
});

// CHANGE THE PASSWORD OF USER
const changePasswrod = asyncHandler(async (req, res) => {
  const { oldPasswrod, newPassword } = req.body;
  const user = await User.findById(req.user._id);

  const hashOldPasswrod = user.isPasswordCorrect(oldPasswrod);
  if (!hashOldPasswrod) {
    throw new ApiResponse(400, "password is incorrect ");
  }

  user.password = newPassword;
  // there is method that will automatically convert the unhashed pass to hashed pass in the model
  await user.save({ validateBeforeSave: false });

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "password is changed successfully "));
});

// FORGET PASSWORD
const fogetPasswrod = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw new ApiResponse(404, "user does not exist");
  }

  // /generate token
  const { unHashedToken, hashedToken, tokenExpiry } =
    user.generateTemporaryToken();

  user.forgetPasswordToken = hashedToken;
  user.expiryPasswordToken = tokenExpiry;

  await user.save({ validateBeforeSave: false });

  const passwordResetUrl = `http://localhost:3000/api/v1/users/reset-password?token=${unHashedToken}`;
  const userName = user.userName;
  const mailgenContent = forgetPasswordMailgenContent(
    userName,
    passwordResetUrl
  );
  sendMail({
    email: user.email,
    subject: "Reset your passwrod",
    mailgenContent,
  });

  return res
    .status(200)
    .json(
      new ApiResponse(200, {}, "password reset has been sent to your email !")
    );
});

// GENERATE REFRESH TOKEN
const generateRefreshToken = asyncHandler(async (req, res) => {});

// RESEND THE EMAIL IN CASE THE EAMIL IS EXPIRED
const resendEmail = asyncHandler(async (req, res) => {});

export {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser,
  fogetPasswrod,
  changePasswrod,
  generateRefreshToken,
  resendEmail,
};
