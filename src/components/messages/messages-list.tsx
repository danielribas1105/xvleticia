import { useGetMessages } from "@/hooks/messages/use-get-messages"
import MessageCard from "./message-card"
import { motion } from "framer-motion"

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
}

export default function MessagesList() {
	const { data: messages = [], isLoading } = useGetMessages()

	return (
		<>
			{isLoading ? (
				<div className="text-center">Carregando mensagens...</div>
			) : (
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid gap-8 lg:grid-cols-3"
				>
					{messages.map((message, i) => (
						<MessageCard key={i} message={message} />
					))}
				</motion.div>
			)}
		</>
	)
}
