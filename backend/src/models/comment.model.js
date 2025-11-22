import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    commentedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: String,
    likeCount: { type: Number, default: 0 },
    commentOnPost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post",
      required: true,
    },
  },
  { timestamps: true }
);

// add a middleware to add on delete cascade -> when the commentdelete the like on that comment should be delete

export const Comment = mongoose.model("Comment", commentSchema);
