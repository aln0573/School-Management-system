import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { CreateUser } from "../../application/use-cases/auth/CreateUser";
import { LoginUser } from "../../application/use-cases/auth/LoginUser";

@injectable()
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUser , 
    private readonly loginUserUseCase:LoginUser
  ) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, role , schoolId, isActive,mustChangePassword } = req.body;
      const user = await this.createUserUseCase.execute({
        email,
        password,
        role,
        schoolId,
        isActive,
        mustChangePassword
      });
      res
        .status(201)
        .json({ success: true, message: "User Created Successfully", user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const user = await this.loginUserUseCase.execute({
        email,
        password,
      });
      res
        .status(200)
        .json({ success: true, message: "Login Successful", user });
    }catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
