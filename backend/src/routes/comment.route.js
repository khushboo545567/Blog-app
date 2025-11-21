import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { commentOn } from "../controllers/comment.controller.js";

const router = Router();

router.route("/commented-on/:postId").post(verifyJwt, commentOn);
export default router;
