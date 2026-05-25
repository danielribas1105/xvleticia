import { useCreateMessage } from "@/hooks/messages/use-create-message"
import { useState } from "react"
import { toast } from "sonner"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"

export default function MessageForm() {
	const { mutateAsync, isPending } = useCreateMessage()

	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	})

	function handleChange(field: keyof typeof form, value: string | boolean) {
		setForm((f) => ({ ...f, [field]: value }))
	}

	async function handleCreate(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		try {
			await mutateAsync(form)

			toast.success(
				"Mensagem enviada com sucesso. Em breve estará na galeria de mensagens. 🎉",
			)

			setForm({
				name: "",
				email: "",
				message: "",
			})
		} catch (error) {
			toast.error("Erro ao enviar mensagem")
			console.error(error)
		}
	}

	return (
		<form onSubmit={handleCreate}>
			<div className="mt-16 rounded-4xl border border-[#D4AF37]/20 bg-white/80 p-10 shadow-2xl backdrop-blur-sm">
				<div className="grid gap-6 md:grid-cols-2">
					<Input
						placeholder="Seu nome"
						value={form.name}
						className="rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF8] outline-none transition"
						onChange={(e) => handleChange("name", e.target.value)}
						disabled={isPending}
						required
					/>
					<Input
						placeholder="Seu e-mail"
						type="email"
						value={form.email}
						className="rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF8] outline-none transition"
						onChange={(e) => handleChange("email", e.target.value)}
						disabled={isPending}
						required
					/>
				</div>
				<Textarea
					placeholder="Escreva sua mensagem para a Leticia..."
					rows={6}
					className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#FFFDF8] outline-none transition"
					value={form.message}
					onChange={(e) => handleChange("message", e.target.value)}
					disabled={isPending}
					required
				/>
				<button
					className="mt-6 rounded-2xl bg-[#8B0D1E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a70f24] hover:shadow-2xl"
					type="submit"
					disabled={isPending}
				>
					{isPending ? "Enviando..." : "Enviar mensagem"}
				</button>
			</div>
		</form>
	)
}
