import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { like } from "../controllers/like.controller.js";

const router = Router();

router.route("/liked-on/:targetModel/:postOrCommentId").post(verifyJwt, like);

export default router;
