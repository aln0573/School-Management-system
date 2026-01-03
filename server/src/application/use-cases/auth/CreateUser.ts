import { inject,injectable } from "tsyringe";
import { randomUUID } from "crypto";
import { User } from "../../../domain/entities/User";
import { IUserRepositories } from "../../../domain/repositories/IUserRepository";
import { CreateUserDTO } from "../../dto/UserDTO";

@injectable()
export class CreateUser {
  constructor(@inject("IUserRepositories") private readonly userRepository: IUserRepositories) {}

  async execute(data: CreateUserDTO) {
    const existingUser = await this.userRepository.findByEmail(data.email);
    if (existingUser) throw new Error("User already exists");

    const user = new User(
      randomUUID(),
      data.email,
      data.password,
      data.role,
      new Date(),
      new Date()
    );

    await this.userRepository.create(user);
  }
}
