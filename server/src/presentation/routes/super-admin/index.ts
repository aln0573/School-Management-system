import { Router } from "express";
import schoolRoutes from "./school.routes";

const router = Router();

router.use("/schools", schoolRoutes);

export default router;
