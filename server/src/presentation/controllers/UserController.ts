import { inject,injectable } from "tsyringe";
import { Request, Response } from "express";
import { CreateUser } from "../../application/use-cases/CreateUser";

@injectable()
export class UserController {
  constructor(private readonly createUserUseCase: CreateUser) {}

  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { email, password, role } = req.body;
      const user = await this.createUserUseCase.execute({
        email,
        password,
        role,
      });
      res
        .status(201)
        .json({ success: true, message: "User Created Successfully", user });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
