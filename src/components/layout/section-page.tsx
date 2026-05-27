import { ReactNode } from "react"

interface SectionPageProps {
	id?: string
	className?: string
	children: ReactNode
}

export default function SectionPage({
	id,
	className,
	children,
}: SectionPageProps) {
	return (
		<section id={id} className={`relative w-full overflow-hidden ${className}`}>
			{children}
		</section>
	)
}
