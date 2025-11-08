import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { createCatogery } from "../controllers/catogery.controller.js";

const router = Router();

router.route("/create-catogery").post(verifyJwt, createCatogery);

export default router;
