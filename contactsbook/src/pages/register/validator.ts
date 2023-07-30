import {z} from "zod";

export const registerSchema = z.object({
    name: z.string().nonempty("Seu nome e obrigatorio").nonempty("Nome do usuario obrigatorio"),
    email: z.string().email("Insira um email Valido").nonempty("email Obrigatorio"),
    cellphone: z.string(),
    password:z.string().min(8, "a senha deve conter no minimo 8 caracteres").nonempty("Cadastre uma senha")

});

export const updateSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("Insira um email Valido").optional(),
    cellphone: z.string().optional(),
    password:z.string().min(8, "a senha deve conter no minimo 8 caracteres").optional()
})

export type RegisterData = z.infer<typeof registerSchema>

export type UpdateUserData = z.infer<typeof updateSchema>