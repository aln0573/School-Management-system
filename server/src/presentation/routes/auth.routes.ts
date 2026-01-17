import { Router } from "express";
import { container } from "./../../di/container";
import { AuthController } from "../controllers/AuthController";

const authRouter = Router();

const authController = container.resolve(AuthController);

authRouter.post(
  "/login",
  authController.login.bind(authController)
)

export default authRouter;