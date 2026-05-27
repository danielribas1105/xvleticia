import SectionPage from "./section-page"
import Image from "next/image"

export default function HeaderSection() {
	return (
		<SectionPage className="flex min-h-screen items-center justify-center px-6 pt-4 pb-10">
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_transparent_45%),linear-gradient(to_bottom,rgba(139,13,30,0.15),transparent)]" />

			<div className="absolute top-10 left-10 h-40 w-40 rounded-full border border-[#D4AF37]/30 animate-pulse" />
			<div className="absolute bottom-16 right-12 h-56 w-56 rounded-full border border-[#8B0D1E]/20 animate-spin animation-duration-[20s]" />

			<div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
				<div className="space-y-8">
					<div className="space-y-6">
						<h1 className="font-title text-5xl leading-tight text-[#D4AF37] md:text-7xl">
							Uma noite de
							<span className="block text-[#8B0D1E]">
								encanto, magia e sonhos.
							</span>
						</h1>

						<p className="max-w-2xl text-lg leading-relaxed text-[#5A3A3A] md:text-xl">
							Celebre os 15 anos da Leticia em uma experiência inspirada no
							universo encantador de A Bela e a Fera. Um baile dourado repleto
							de emoções, música, memórias e momentos inesquecíveis.
						</p>
					</div>
					{/* <Hero />
               <MagicFloating /> */}

					<div className="flex flex-wrap gap-4">
						<a
							href="#confirmation"
							className="rounded-2xl bg-[#8B0D1E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a70f24] hover:shadow-2xl"
						>
							Confirmar Presença
						</a>

						<a
							href="#gallery"
							className="rounded-2xl border border-[#D4AF37] bg-[#D4AF37]/10 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#8B0D1E] transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37]/20"
						>
							Ver Galeria
						</a>
					</div>
				</div>

				<div className="relative flex items-center justify-center">
					<div className="absolute inset-0 rounded-[3rem] bg-linear-to-br from-[#D4AF37]/30 to-[#8B0D1E]/20 blur-3xl" />

					<div className="relative w-full max-w-lvh rounded-4xl bg-transparent transition-transform duration-500 hover:scale-[1.02]">
						{/* <div className="flex h-125 items-center justify-center rounded-3xl border-2 border-dashed border-[#D4AF37]/40 bg-[#F8F0DD] text-center">
                                    <div className="space-y-4 px-8">
                                       <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#D4AF37]/15 text-4xl">
                                          ✨
                                       </div>
         
                                       <h2 className="text-2xl font-semibold text-[#8B0D1E]">
                                          Espaço para Logo
                                       </h2>
         
                                       <p className="text-sm leading-relaxed text-[#6A4A4A]">
                                          Insira aqui a logo oficial da festa XV Leticia.
                                       </p>
                                    </div>
                                 </div> */}
						<Image
							src={"/logo/XV-Leticia.png"}
							alt={"Logo 15 anos Leticia"}
							width={700}
							height={700}
						/>
					</div>
				</div>
			</div>
		</SectionPage>
	)
}
