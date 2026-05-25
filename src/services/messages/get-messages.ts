import { supabase } from "@/lib/supabase/client"

export async function getMessages() {
	const { data, error } = await supabase
		.from("messages")
		.select("*")
		.order("created_at", { ascending: false })

	if (error) {
		throw new Error(error.message)
	}

	return data
}
