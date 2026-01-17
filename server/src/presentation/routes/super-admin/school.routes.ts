import { Router } from "express";
import { authenticate } from "../../middleware/authenticate";
import { authorize } from "../../middleware/authorize";
import { container } from "../../../di/container";
// import { SchoolController } from "../../controllers/SchoolController";

const router = Router();
// const controller = container.resolve(SchoolController);

// router.post(
//   "/",
//   authenticate,
//   authorize("super_admin"),
//   controller.createSchool.bind(controller)
// );

export default router;
