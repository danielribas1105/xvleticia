"use client"
import Footer from "@/components/layout/footer"
import Messages from "@/components/messages-section"
import { gallery } from "@/constants/Gallery"
import { gifts } from "@/constants/Gifts"
import Image from "next/image"

export default function Home() {
	return (
		<>
			{/* <BackgroundMusic /> */}
			<main className="min-h-screen bg-[#F6EAD1] text-[#3B1F1F] overflow-hidden">
				<section className="relative flex min-h-screen items-center justify-center px-6 pt-4 pb-10">
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
									universo encantador de A Bela e a Fera. Um baile dourado
									repleto de emoções, música, memórias e momentos inesquecíveis.
								</p>
							</div>

							<div className="flex flex-wrap gap-4">
								<a
									href="#confirmacao"
									className="rounded-2xl bg-[#8B0D1E] px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#a70f24] hover:shadow-2xl"
								>
									Confirmar Presença
								</a>

								<a
									href="#galeria"
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
				</section>

				<section id="galeria" className="relative mx-auto max-w-7xl px-6 py-24">
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
										Espaço reservado para imagens ou vídeos especiais da
										Leticia.
									</p>
								</div>
							</div>
						))}
					</div>
				</section>

				<section className="relative bg-[#8B0D1E] px-6 py-24 text-white">
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
							{gifts.map((gift) => (
								<div
									key={gift}
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
				</section>

				<section id="confirmacao" className="mx-auto max-w-7xl px-6 py-24">
					<div className="grid gap-10 lg:grid-cols-2">
						<div className="rounded-4xl border border-[#D4AF37]/20 bg-white/70 p-10 shadow-2xl backdrop-blur-sm">
							<span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">
								RSVP
							</span>

							<h2 className="mt-4 text-4xl font-serif text-[#8B0D1E]">
								Confirme sua presença
							</h2>

							<p className="mt-6 text-lg leading-relaxed text-[#6A4A4A]">
								Sua presença tornará essa noite ainda mais especial. Clique no
								botão abaixo para acessar o formulário de confirmação.
							</p>

							<div className="mt-10">
								<a
									href="https://forms.google.com"
									target="_blank"
									rel="noreferrer"
									className="inline-flex items-center rounded-2xl bg-[#D4AF37] px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-[#4A2A2A] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
								>
									Abrir Google Form
								</a>
							</div>
						</div>

						<div className="rounded-4xl border border-[#D4AF37]/20 bg-linear-to-br from-[#FFF8EE] to-[#F9E9C3] p-10 shadow-2xl">
							<span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#8B0D1E]">
								Informações do Evento
							</span>

							<div className="mt-8 space-y-6">
								<div className="rounded-2xl bg-white/70 p-5">
									<p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
										Data
									</p>
									<h3 className="mt-2 text-2xl font-semibold text-[#8B0D1E]">
										19 de Março de 2027
									</h3>
								</div>

								<div className="rounded-2xl bg-white/70 p-5">
									<p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
										Local
									</p>
									<h3 className="mt-2 text-2xl font-semibold text-[#8B0D1E]">
										Tropical Festas
									</h3>
								</div>

								<div className="rounded-2xl bg-white/70 p-5">
									<p className="text-sm uppercase tracking-[0.2em] text-[#D4AF37]">
										Horário
									</p>
									<h3 className="mt-2 text-2xl font-semibold text-[#8B0D1E]">
										20:00
									</h3>
								</div>
							</div>
						</div>
					</div>
				</section>
				<Messages />
				<Footer />
			</main>
		</>
	)
}
