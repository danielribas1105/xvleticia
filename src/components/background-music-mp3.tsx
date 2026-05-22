"use client"

import { useEffect, useRef, useState } from "react"

export function BackgroundMusicMp3() {
	const audioRef = useRef<HTMLAudioElement | null>(null)
	const [started, setStarted] = useState(false)

	useEffect(() => {
		const startMusic = async () => {
			if (started) return

			try {
				await audioRef.current?.play()
				setStarted(true)
			} catch (error) {
				console.log("Autoplay bloqueado")
			}
		}

		window.addEventListener("click", startMusic)

		return () => {
			window.removeEventListener("click", startMusic)
		}
	}, [started])

	return (
		<>
			<audio ref={audioRef} loop preload="auto">
				<source src="/music/bela-e-a-fera.mp3" type="audio/mpeg" />
			</audio>

			{!started && (
				<button
					onClick={() => audioRef.current?.play()}
					className="fixed bottom-6 right-6 z-50 rounded-full bg-[#8B0D1E] px-5 py-3 text-white shadow-2xl"
				>
					▶ Tocar Música
				</button>
			)}
		</>
	)
}
