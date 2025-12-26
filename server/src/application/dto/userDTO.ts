import { UserRole } from "../../domain/entities/User";

export interface CreateUserDTO{
    email:string;
    password:string;
    role:UserRole;
}