import { Message } from "@/schemas/message"
import { motion } from "framer-motion"

interface MessageCardProps {
	message: Message
}

const item = {
	hidden: {
		opacity: 0,
		y: 40,
	},
	show: {
		opacity: 1,
		y: 0,
	},
}

export default function MessageCard({ message }: MessageCardProps) {
	return (
		<motion.div
			variants={item}
			initial={{
				opacity: 0,
				y: 40,
				scale: 0.95,
			}}
			whileInView={{
				opacity: 1,
				y: 0,
				scale: 1,
			}}
			viewport={{
				once: false,
				amount: 0.3,
			}}
			transition={{
				duration: 0.7,
				ease: "easeOut",
			}}
			whileHover={{
				boxShadow: "0px 20px 50px rgba(212,175,55,0.35)",
			}}
			className="rounded-4xl border border-white/50 bg-white/70 p-8 shadow-xl backdrop-blur-sm transition-all duration-500 hover:shadow-2xl"
		>
			<div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D4AF37]/20 text-3xl">
				💌
			</div>

			<p className="text-lg leading-relaxed text-[#5A3A3A]">
				“{message.message}”
			</p>

			<div className="mt-8 border-t border-[#D4AF37]/20 pt-4">
				<p className="font-semibold text-[#8B0D1E]">{message.name}</p>
			</div>
		</motion.div>
	)
}
