import { Request,Response,NextFunction } from "express";
import jwt from "jsonwebtoken";


export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies?.access_token;
  
  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

    

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as any
        req.user = decoded ;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    };
}