import { Router } from "express";
import { verifyJwt } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/rbac.middleware.js";
import { assignPermissionToRole } from "../controllers/rolePermission.controller.js";

const router = Router();

router
  .route("/assign-permission-to-role")
  .post(verifyJwt, authorizeRoles("admin"), assignPermissionToRole);

export default router;
