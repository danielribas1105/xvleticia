import { ReactNode } from "react"

interface SectionPageProps {
	className?: string
	children: ReactNode
}

export default function SectionPage(props: SectionPageProps) {
	return (
		<section className={`relative w-full ${props.className} overflow-hidden`}>
			{props.children}
		</section>
	)
}
