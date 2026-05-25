import { supabase } from "@/lib/supabase/client"

interface CreateMessageParams {
	name: string
	email: string
	message: string
}

export async function createMessage({
	name,
	email,
	message,
}: CreateMessageParams) {
	const { data, error } = await supabase
		.from("messages")
		.insert({
			name,
			email,
			message,
		})
		.select()

	if (error) {
		throw new Error(error.message)
	}

	return data
}
