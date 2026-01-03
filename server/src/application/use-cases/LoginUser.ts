import { inject, injectable } from "tsyringe";
import { randomUUID } from "crypto";
import { User } from "../../domain/entities/User";
import { IUserRepositories } from "../../domain/repositories/IUserRepository";
import { LoginUserDTO } from "../dto/UserDTO";

@injectable()
export class LoginUser {
  constructor(
    @inject("IUserRepositories")
    private readonly userRepository: IUserRepositories
  ) {}

  async execute(data: LoginUserDTO) {
    const findUser = await this.userRepository.findByEmail(data.email);
    if (!findUser) throw new Error("Invalid email or password");
    const isPasswordValid = await this.userRepository.comparePassword(
      data.password,
      findUser.getPassword()
    );
    if (!isPasswordValid) throw new Error("Invalid email or password");
    return findUser;
  }
}
