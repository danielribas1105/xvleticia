"use client"
import SectionPage from "./layout/section-page"
import MessageCard from "./message-card"
import MessageForm from "./message-form"
import { useEffect, useState } from "react"
import { getMessages } from "@/services/messages/get-messages"
import { Message } from "@/schemas/message"

export default function Messages() {
	const [messages, setMessages] = useState<Message[]>([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		async function loadMessages() {
			try {
				const data = await getMessages()

				setMessages(data)
			} catch (error) {
				console.error(error)
			} finally {
				setIsLoading(false)
			}
		}

		loadMessages()
	}, [])

	return (
		<SectionPage className="bg-linear-to-b from-[#F6EAD1] to-[#EFD8A5] px-6 py-24">
			<div className="mx-auto max-w-7xl">
				<div className="mb-16 text-center">
					<span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B0D1E]">
						Mensagens
					</span>

					<h2 className="mt-4 text-4xl font-serif text-[#8B0D1E] md:text-5xl">
						Deixe um recado especial
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#6A4A4A]">
						Compartilhe carinho, lembranças e votos para essa nova fase da vida
						da Leticia.
					</p>
				</div>

				{isLoading ? (
					<div className="text-center">Carregando mensagens...</div>
				) : (
					<div className="grid gap-8 lg:grid-cols-3">
						{messages.map((message, i) => (
							<MessageCard key={i} message={message} />
						))}
					</div>
				)}

				<MessageForm />
			</div>
		</SectionPage>
	)
}
