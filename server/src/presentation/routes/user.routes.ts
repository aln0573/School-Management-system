import { Router } from "express";
import { container } from "../../di/container";
import { UserController } from "../controllers/UserController";

const router = Router();

const userController = container.resolve(UserController);

router.post(
  "/",
  userController.createUser.bind(userController)
);


export default router;
