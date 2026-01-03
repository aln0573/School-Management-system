import "reflect-metadata";
import { container } from "tsyringe";
import { IUserRepositories } from "../domain/repositories/IUserRepository";
import { MongoUserRepository } from "../infrastructure/database/repositories/MongoUserRepository";
import { CreateUser } from "../application/use-cases/auth/CreateUser";
import { LoginUser } from "../application/use-cases/auth/LoginUser";
import { UserController } from "../presentation/controllers/UserController";
import { JwtService } from "../infrastructure/security/JwtService";

container.register<IUserRepositories>("IUserRepositories", {
  useClass: MongoUserRepository,
});

container.register(CreateUser, {
  useClass: CreateUser,
});


container.register(LoginUser, {
  useClass: LoginUser,
});

container.register(UserController, {
  useClass: UserController,
});


export { container };
