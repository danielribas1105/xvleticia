import { gallery } from "@/constants/Gallery"
import SectionPage from "./section-page"
import SectionContent from "./section-content"

export default function GallerySection() {
	return (
		<SectionPage id="gallery" className="px-6 py-24">
			<SectionContent>
				<div className="mb-16 text-center">
					<span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
						Galeria Encantada
					</span>

					<h2 className="mt-4 text-4xl font-serif text-[#8B0D1E] md:text-5xl">
						Fotos e Vídeos da Debutante
					</h2>

					<p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#6A4A4A]">
						Compartilhe os melhores momentos, ensaios fotográficos e vídeos
						especiais para tornar essa experiência ainda mais inesquecível.
					</p>
				</div>

				<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
					{gallery.map((item, index) => (
						<div
							key={item.title}
							className="group overflow-hidden rounded-4xl border border-[#D4AF37]/20 bg-white/60 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
							style={{ animationDelay: `${index * 150}ms` }}
						>
							<div className="relative h-80 overflow-hidden">
								<img
									src={item.image}
									alt={item.title}
									className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
								/>

								<div className="absolute inset-0 bg-linear-to-t from-[#8B0D1E]/70 via-transparent to-transparent" />
							</div>

							<div className="space-y-3 p-6">
								<h3 className="text-2xl font-semibold text-[#8B0D1E]">
									{item.title}
								</h3>

								<p className="text-sm leading-relaxed text-[#6A4A4A]">
									Espaço reservado para imagens ou vídeos especiais da Leticia.
								</p>
							</div>
						</div>
					))}
				</div>
			</SectionContent>
		</SectionPage>
	)
}
