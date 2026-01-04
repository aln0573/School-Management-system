import {z} from 'zod';


export const createUserSchema = z.object({
    email: z.string().email(),
    password:z.string().min(6),
    role: z.enum(['admin', 'super_admin', 'parent','student','teacher']),
    schoolId: z.string().nullable(),
    isActive:z.boolean().optional(),
    mustChangePassword:z.boolean().optional()
});

export const loginUserSchema = z.object({
    email: z.string().email(),
    password:z.string().min(6),
});