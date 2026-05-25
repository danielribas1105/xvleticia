import { supabase } from "@/lib/supabase/client"
import { Message } from "@/schemas/message"

export async function getMessages(): Promise<Message[]> {
	const { data, error } = await supabase
		.from("messages")
		.select("*")
		.order("created_at", { ascending: false })

	if (error) {
		throw new Error(error.message)
	}

	return data ?? []
}
