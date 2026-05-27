import { motion } from "framer-motion"

export default function MagicFloating() {
	return (
		<motion.div
			animate={{
				y: [0, -10, 0],
			}}
			transition={{
				duration: 4,
				repeat: Infinity,
			}}
		>
			🌹
		</motion.div>
	)
}
