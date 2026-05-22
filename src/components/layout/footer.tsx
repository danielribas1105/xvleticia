export default function Footer() {
	return (
		<footer className="border-t border-[#D4AF37]/20 bg-[#8B0D1E] px-6 py-10 text-center text-[#F6EAD1]">
			<div className="flex flex-col items-center space-y-4">
				<h2 className="flex gap-4 items-center text-[#D4AF37]">
					<p className="font-xv text-5xl">XV</p>
					<p className="font-logo text-7xl">Leticia</p>
				</h2>

				<p className="text-lg uppercase tracking-[0.2em] text-[#F6EAD1]/70">
					Uma noite inspirada em A Bela e a Fera
				</p>

				<p className="text-sm text-[#F6EAD1]/60">
					Desenvolvido para celebrar um momento inesquecível.
				</p>
			</div>
		</footer>
	)
}
