import { UserRole } from "../../domain/entities/User";

export interface CreateUserDTO{
    email:string;
    password:string;
    role:UserRole;
    schoolId:string | null;
    isActive:boolean;
    mustChangePassword?:boolean;
}

export interface LoginUserDTO{
    email:string;
    password:string;
}