"use client"

import { motion } from "framer-motion"

export function Hero() {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{
				duration: 1.2,
				ease: "easeOut",
			}}
		>
			<h1>XV Leticia</h1>
		</motion.div>
	)
}
