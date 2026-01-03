import { inject, injectable } from "tsyringe";
import { IUserRepositories } from "../../../domain/repositories/IUserRepository";
import { LoginUserDTO } from "../../dto/UserDTO";
import { JwtService } from "../../../infrastructure/security/JwtService";
import { PasswordHasher } from "../../../infrastructure/security/PasswordHasher";

@injectable()
export class LoginUser {
  constructor(
    @inject("IUserRepositories") private readonly userRepository: IUserRepositories,
    private  jwtService: JwtService,
    private readonly passwordHasher: PasswordHasher
  ) {}

  async execute(data: LoginUserDTO) {
    const findUser = await this.userRepository.findByEmail(data.email);
    if (!findUser) throw new Error("Invalid email or password");
    
    const isPasswordValid = await this.passwordHasher.compare(data.password, findUser.getPassword());

    if (!isPasswordValid) throw new Error("Invalid email or password");

    if(!findUser.getActive()) throw new Error("User account is inactive");

    const token  = this.jwtService.sign({ userId: findUser.getId(), role: findUser.getRole(), schoolId: findUser.getSchoolId() });
    
    return {token};
  }
}
