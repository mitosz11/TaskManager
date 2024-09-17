import express from "express";
import authController from "../controllers/authController.js";
import yupValidate from "../middlewares/validate.js";
import { registerSchema } from "../schemas/userSchema.js";

const router = express.Router();

router.post("/register", yupValidate(registerSchema), authController.register);
router.post("/login", authController.login);
router.post("/confirm/:token", authController.confirm);

export default router;
