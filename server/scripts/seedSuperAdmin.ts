import "dotenv/config";
import { UserModel } from "../src/infrastructure/database/mongoose/models/UserModel";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

async function seedSuperAdmin() {
  try {
    const mongouri = process.env.MONGO_URI;
    const email = process.env.SUPER_ADMIN_EMAIL;
    const password = process.env.SUPER_ADMIN_PASSWORD;

    if (!mongouri || !email || !password) {
      throw new Error("missing required environment variables");
    }

    await mongoose.connect(mongouri);
    console.log("Database connected");

    const existingAdmin = await UserModel.findOne({ role: "super_admin" });
    if (existingAdmin) {
      console.log("Super Admin already exists. Skipping seed.");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await UserModel.create({
      email,
      password: hashedPassword,
      role: "super_admin",
      schoolId: null,
      isActive: true,
      mustChangePassword: false,
    });

    console.log("✅ Super Admin created successfully");
    process.exit(0);
  } catch (error: any) {
    console.error("❌ Failed to seed Super Admin:", error.message);
    process.exit(1);
  }
}

seedSuperAdmin();
