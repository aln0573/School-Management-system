import { User } from "../../../domain/entities/User";
import { IUserRepositories } from "../../../domain/repositories/IUserRepository";
import { IUserSchema, UserModel } from "../mongoose/models/UserModel";
import mongoose from "mongoose";

export class MongoUserRepository implements IUserRepositories {
  private toDomain(userDoc: IUserSchema): User {
    return new User(
      userDoc._id.toString(),
      userDoc.email,
      userDoc.password,
      userDoc.role,
      userDoc.schoolId ? userDoc.schoolId.toString() : null,
      userDoc.isActive,
      userDoc.mustChangePassword,
      userDoc.createdAt,
      userDoc.updatedAt
    );
  }

  async create(user: User): Promise<User> {
    const schoolId = user.getSchoolId();
    const newUser = new UserModel({
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
      schoolId: schoolId ? new mongoose.Types.ObjectId(schoolId) : null,
      isActive: user.getActive(),
      mustChangePassword: user.getMustChangePassword(),
    });

    const savedUser = await newUser.save();
    return this.toDomain(savedUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await UserModel.findOne({ email }).lean();
    return user ? this.toDomain(user) : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = await UserModel.findById(id).lean();
    return user ? this.toDomain(user) : null;
  }
  
}
