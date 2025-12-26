import { Schema, model, Document } from "mongoose";
import { UserRole } from "../../../../domain/entities/User";


export interface IUserSchema extends Document {
  email: string;
  password: string;
  role: UserRole;
}

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum:['admin','parent','student','teacher'],
      required:true
    },
  },
  { timestamps: true }
);

export const userModel = model<IUserSchema>("User", userSchema);
