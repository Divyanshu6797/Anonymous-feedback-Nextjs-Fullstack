import { z } from "zod";

export const usernameValidation = z
.string()
.min(2,"username must be of atleast 2 characters")
.max(20, "username must be of atmost 20 characters")
.regex(/^[a-zA-Z0-9]+$/, "Username should not contain special characters")


export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({ message: "Invalid email"}),
    password: z.string().min(6, { message: "Password must be atleast 6 characters"}),
    confirmPassword: z.string().min(6),
})