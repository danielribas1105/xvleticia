import { ReactNode } from "react"

interface SectionContentProps {
	className?: string
	children: ReactNode
}

export default function SectionContent({
	className,
	children,
}: SectionContentProps) {
	return <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>
}
