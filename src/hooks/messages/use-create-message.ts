import { useMutation, useQueryClient } from "@tanstack/react-query"

import { createMessage } from "@/services/messages/create-message"

export function useCreateMessage() {
	const queryClient = useQueryClient()

	return useMutation({
		mutationFn: createMessage,

		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ["messages"],
			})
		},
	})
}
