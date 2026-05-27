import { gifts } from "@/constants/Gifts"
import SectionPage from "./section-page"
import SectionContent from "./section-content"

export default function GiftsSection() {
	return (
		<SectionPage className="bg-[#8B0D1E] px-6 py-24 text-white">
			<SectionContent>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.2),_transparent_50%)]" />

				<div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
					<div className="space-y-8">
						<span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#F6EAD1]">
							Lista de Presentes
						</span>

						<h2 className="text-4xl font-serif leading-tight md:text-5xl">
							Demonstre seu carinho com um presente especial.
						</h2>

						<p className="max-w-2xl text-lg leading-relaxed text-[#F6EAD1]/80">
							Escolha uma lembrança para tornar este momento ainda mais
							marcante.
						</p>
					</div>

					<div className="grid gap-4">
						{gifts.map((gift, i) => (
							<div
								key={i}
								className="rounded-2xl border border-[#D4AF37]/30 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:translate-x-2 hover:bg-white/15"
							>
								<div className="flex items-center gap-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D4AF37]/20 text-xl">
										🎁
									</div>

									<p className="text-base font-medium">{gift}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</SectionContent>
		</SectionPage>
	)
}
