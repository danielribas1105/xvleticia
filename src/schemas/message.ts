import z from "zod"

export const MessageSchema = z.object({
	id: z.uuid(),
	name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
	email: z.email(),
	message: z.string().min(8, "A mensagem deve ter pelo menos 8 caracteres"),
	created_at: z.coerce.date().nullable().optional(),
})

// Gerar o tipo TypeScript automaticamente
export type Message = z.infer<typeof MessageSchema>
