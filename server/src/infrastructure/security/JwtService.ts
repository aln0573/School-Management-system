import jwt from "jsonwebtoken";

export class JwtService {
  private readonly secret = process.env.JWT_SECRET!;

  sign(payload: object): string {
    return jwt.sign(payload, this.secret, { expiresIn: "1d" });
  }

  verify(token: string): any {
    return jwt.verify(token, this.secret);
  }
}
