import { Router } from "express";
import { container } from "tsyringe";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router();

const authController = container.resolve(AuthController);

authRouter.post(
  "/api/auth/login",
  authController.login.bind(authController)
)

export default authRouter;