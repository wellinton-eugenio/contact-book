import {z} from "zod";

export const createContactSchema = z.object({
    name: z.string().nonempty("O nome é obrigatorio"),
    email: z.string().email().nullish().default(null),
    cellphone: z.string(),
});

export const updateContactSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("Insira um email Valido").optional(),
    cellphone: z.string().optional(),
});

export type ContactData = z.infer<typeof createContactSchema>;

export type UpdateContactData = z.infer<typeof updateContactSchema>;