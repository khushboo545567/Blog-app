import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { PostAticle } from "../controllers/post.controller.js";

const router = Router();

router
  .route("/post-article/:categoryId")
  .post(verifyJwt, upload.array("postImage", 5), PostAticle);

export default router;
