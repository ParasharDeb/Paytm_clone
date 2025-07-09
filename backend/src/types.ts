import z from "zod";
export const SingupSchema=z.object({
    firstname:z.string().min(3).max(50),
    lastname:z.string().max(50).min(3),
    password:z.string(),
    email:z.string()
})
export const SinginSchema=z.object({
    email:z.string().min(3).max(1000),
    password:z.string(),
})