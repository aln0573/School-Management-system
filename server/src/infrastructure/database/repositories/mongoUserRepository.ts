import { User } from "../../../domain/entities/User";
import { IUserRepositories } from "../../../domain/repositories/IUserRepository";
import { IUserSchema, userModel } from "../mongoose/models/userModel";

export class MongoUserRepository implements IUserRepositories {
  private toDomain(userDoc: IUserSchema): User {
    return new User(
      userDoc._id.toString(),
      userDoc.email,
      userDoc.password,
      userDoc.role,
      userDoc.createdAt,
      userDoc.updatedAt
    );
  }

  async create(user: User): Promise<User> {
    const newUser = await new userModel({
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    });

    const savedUser = await newUser.save();
    return this.toDomain(savedUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await userModel.findOne({ email }).lean();
    return user ? this.toDomain(user) : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = await userModel.findById(id).lean();
    return user ? this.toDomain(user) : null;
  }
}
