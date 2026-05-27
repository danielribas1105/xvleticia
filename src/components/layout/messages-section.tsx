"use client"
import SectionContent from "../layout/section-content"
import SectionPage from "../layout/section-page"
import MessageForm from "../messages/message-form"
import MessagesList from "../messages/messages-list"

export default function MessagesSection() {
	return (
		<SectionPage className="bg-linear-to-b from-[#F6EAD1] to-[#EFD8A5] px-6 py-24">
			<SectionContent>
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
				<MessagesList />
				<MessageForm />
			</SectionContent>
		</SectionPage>
	)
}
