import { Router } from "express";
import {
  login,
  logout,
  profile,
  register,
  verifyToken,
} from "../controllers/auth.controller.js";
import { authRequire } from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middlewares.js";
import { registerSchema, loginSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validatorSchema(registerSchema), register);
router.post("/login", validatorSchema(loginSchema), login);
router.post("/logout", logout);
router.get("/verify", verifyToken);
router.get("/profile", authRequire, profile);

export default router;
