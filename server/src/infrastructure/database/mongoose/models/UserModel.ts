import mongoose, { Schema, model, Document } from "mongoose";
import { UserRole } from "../../../../domain/entities/User";

export interface IUserSchema extends Document {
  email: string;
  password: string;
  role: UserRole;
  schoolId:mongoose.Types.ObjectId | null;
  isActive:boolean;
  mustChangePassword:boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema = new Schema<IUserSchema>(
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
      enum: ["super_admin", "admin", "parent", "student", "teacher"],
      required: true,
    },
    schoolId:{
      type:Schema.Types.ObjectId,
      ref:'School',
      default:null
    },
    isActive:{
      type:Boolean,
      default:true
    },
    mustChangePassword:{
      type:Boolean,
      default:true
    }
  },
  { timestamps: true }
);

export const UserModel = model<IUserSchema>("User", userSchema);
