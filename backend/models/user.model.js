import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    userName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },
    password: { type: String, required: true, minlength: 6 },
    avatar: {
      type: {
        url: String,
        localPath: String,
      },
      default: { url: `https://placehold.co/200x200`, localPath: "" },
    },
    bio: { type: String, maxlength: 100 },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      default: "USER",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
    },
    forgetPasswordToken: {
      type: String,
    },
    expiryPasswordToken: {
      type: Date,
    },
    emailVerificationToken: {
      type: String,
    },
    emailExpiryVerificationToken: {
      type: Date,
    },
  },
  { timestamps: true }
);

// pre methods

userSchema.pre("save", async function (next) {
  // only runs if the password gets changed
  if (!this.isModified("password")) return next();
});
export const User = mongoose.model("User", userSchema);
