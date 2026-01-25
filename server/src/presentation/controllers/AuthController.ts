import { injectable } from "tsyringe";
import { loginUserSchema } from "../validators/auth.validator";
import { LoginUser } from "../../application/use-cases/auth/LoginUser";
import { Request, Response } from "express";

@injectable()
export class AuthController {
  constructor(private readonly loginUserUseCase: LoginUser) {}

  async login(req: Request, res: Response): Promise<void> {
    try {
      const data = loginUserSchema.parse(req.body);

      const user = await this.loginUserUseCase.execute({
        email: data.email,
        password: data.password,
      });

      res.cookie("access_token", user.token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
      });

      res
        .status(200)
        .json({ success: true, message: "Login Successful", user });
    } catch (error: any) {
      if (error.name === "ZodError") {
        res.status(400).json({ success: false, error: error.issues });
        return;
      }
      res.status(400).json({ error: error.message });
    }
  }

  async me(req: Request, res: Response) {
    try {
      res
        .status(200)
        .json({
          success: true,
          user: {
            id: req.user?.userId,
            role: req.user?.role,
            schoolId: req.user?.schoolId,
          },
        });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }

  async logout(req: Request, res: Response) {
    try {
      res.clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return res.status(200).json({
        success: true,
        message: "Logged out successfully",
      });
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}
