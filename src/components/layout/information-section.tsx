import SectionContent from "./section-content"
import SectionPage from "./section-page"

export default function InformationSection() {
	return (
		<SectionPage id="confirmation" className="px-6 py-24">
			<SectionContent>
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
			</SectionContent>
		</SectionPage>
	)
}
