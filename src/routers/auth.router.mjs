import { Router } from "express";
import * as userController from '../controllers/auth.controller.mjs'
import authMiddleware from "../middlewares/auth.middleware.mjs";
import * as authValidation from '../validations/auth.validation.mjs'

const router = Router();

router.post("/login", userController.login);

router.post("/register", authValidation.registerValidation, userController.register);

router.get("/me", authMiddleware, userController.getMe);
export default router;