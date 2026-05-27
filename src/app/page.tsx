"use client"
import Footer from "@/components/layout/footer"
import GallerySection from "@/components/layout/gallery-section"
import GiftsSection from "@/components/layout/gifts-section"
import HeaderSection from "@/components/layout/header-section"
import InformationSection from "@/components/layout/information-section"
import MessagesSection from "@/components/layout/messages-section"

export default function Home() {
	return (
		<>
			{/* <BackgroundMusic /> */}
			<main className="min-h-screen bg-[#F6EAD1] text-[#3B1F1F] overflow-hidden">
				<HeaderSection />
				<GallerySection />
				<GiftsSection />
				<InformationSection />
				<MessagesSection />
				<Footer />
			</main>
		</>
	)
}
