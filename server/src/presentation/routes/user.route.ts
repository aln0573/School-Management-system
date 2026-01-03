import { Router } from "express";
import { container } from "../../di/container";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = container.resolve(UserController);

router.post(
  "/api/users",
  userController.createUser.bind(userController)
);

router.post(
  "/api/users/login",
  userController.login.bind(userController)
)
export default router;
