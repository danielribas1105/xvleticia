import { useQuery } from "@tanstack/react-query"

import { getMessages } from "@/services/messages/get-messages"

export function useGetMessages() {
	return useQuery({
		queryKey: ["messages"],
		queryFn: getMessages,
	})
}
