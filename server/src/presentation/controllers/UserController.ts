import { injectable } from "tsyringe";
import { Request, Response } from "express";
import { CreateUser } from "../../application/use-cases/user/CreateUser";
import { createUserSchema } from "../validators/user.validator";

@injectable()
export class UserController {
  constructor(
    private readonly createUserUseCase: CreateUser , 
  ) {}

  async createUser(req: Request, res: Response): Promise<void > {
    try {
      const data = createUserSchema.parse(req.body);
      const user = await this.createUserUseCase.execute({
        email:data.email,
        password:data.password,
        role:data.role,
        schoolId:data.schoolId,
        isActive: data.isActive ?? true,
        mustChangePassword: data.mustChangePassword,
      });
      res
        .status(201)
        .json({ success: true, message: "User Created Successfully", user });
    } catch (error: any) {
      if(error.name=== "ZodError" ){
        res.status(400).json({ success:false, error: error.issues });
        return;
      }
      res.status(400).json({ error: error.message });
    }
  }
}
