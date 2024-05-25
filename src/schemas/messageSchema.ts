import {z} from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Message must be atleast 1 character"})
    .max(400, {message: "Message must be atmost 1000 characters" }),
})