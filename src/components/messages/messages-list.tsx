import { useGetMessages } from "@/hooks/messages/use-get-messages"
import MessageCard from "./message-card"

export default function MessagesList() {
	const { data: messages = [], isLoading } = useGetMessages()

	return (
		<>
			{isLoading ? (
				<div className="text-center">Carregando mensagens...</div>
			) : (
				<div className="grid gap-8 lg:grid-cols-3">
					{messages.map((message, i) => (
						<MessageCard key={i} message={message} />
					))}
				</div>
			)}
		</>
	)
}
