import { Message } from "@/schemas/message"

interface MessageCardProps {
	message: Message
}

export default function MessageCard({ message }: MessageCardProps) {
	return (
		<div className="rounded-4xl border border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
			<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/20 text-3xl">
				💌
			</div>

			<p className="text-lg leading-relaxed text-[#5A3A3A]">
				“{message.message}”
			</p>

			<div className="mt-8 border-t border-[#D4AF37]/20 pt-4">
				<p className="font-semibold text-[#8B0D1E]">{message.name}</p>
			</div>
		</div>
	)
}
