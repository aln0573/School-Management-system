import { Express } from "express";
import authRoutes from "./auth.routes";
import userRoutes from "./user.routes";
// import superAdminRoutes from "./super-admin/school.routes";

export function registerRoutes(app: Express) {
  app.use("/api/auth", authRoutes);
  app.use("/api/users", userRoutes);
//   app.use("/api/super-admin", superAdminRoutes);
}