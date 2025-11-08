import mongoose from "mongoose";

const permissionSchema = new mongoose.Schema(
  {
    resource: { type: String, required: true }, // e.g., 'Post'
    action: { type: String, required: true }, // e.g., 'create', 'read'
  },
  { timestamps: true }
);

export const Permission = mongoose.model("Permission", permissionSchema);
