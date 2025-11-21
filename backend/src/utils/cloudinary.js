import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const uploadOnCloudnary = async (localPath) => {
  try {
    if (!localPath) return null;

    const upload = await cloudinary.uploader.upload(localPath, {
      resource_type: "auto",
    });

    if (fs.existsSync(localPath)) {
      await fs.promises.unlink(localPath);
    }

    return upload;
  } catch (error) {
    // safe cleanup: only unlink if path exists
    try {
      if (localPath && fs.existsSync(localPath)) {
        await fs.promises.unlink(localPath);
      }
    } catch (e) {
      console.warn("Failed to delete localPath in cloudinary util:", e.message);
    }

    console.error("Cloudinary upload error:", error);
    return null;
  }
};

export { uploadOnCloudnary };
