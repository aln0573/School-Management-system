import { Router } from "express";
import { container } from "./../../di/container";
import { AuthController } from "../controllers/AuthController";
import { authenticate } from "../middleware/authenticate";

const authRouter = Router();

const authController = container.resolve(AuthController);


authRouter.post(
  "/login",
  authController.login.bind(authController)
)

authRouter.get(
  "/me",
  authenticate,
  authController.me.bind(authController)
)

export default authRouter;