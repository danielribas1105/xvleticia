"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundMusic() {
	const playerRef = useRef<HTMLIFrameElement | null>(null)
	const [started, setStarted] = useState(false)

	useEffect(() => {
		const handleStart = () => {
			if (started) return

			const iframe = playerRef.current

			iframe?.contentWindow?.postMessage(
				JSON.stringify({
					event: "command",
					func: "playVideo",
				}),
				"*",
			)

			setStarted(true)
		}

		window.addEventListener("click", handleStart)

		return () => {
			window.removeEventListener("click", handleStart)
		}
	}, [started])

	return (
		<>
			<iframe
				ref={playerRef}
				className="hidden"
				width="0"
				height="0"
				src="https://youtu.be/shf4_Xm0iXA?list=RDshf4_Xm0iXA"
				title="Background Music"
				allow="autoplay"
			/>

			{!started && (
				<button
					onClick={() => setStarted(true)}
					className="fixed bottom-6 right-6 z-50 rounded-full bg-[#8B0D1E] px-5 py-3 text-white shadow-xl"
				>
					🎵 Tocar Música
				</button>
			)}
		</>
	)
}
