import type { Metadata } from "next"
import {
	Ballet,
	Cardo,
	Charm,
	Geist,
	Geist_Mono,
	Roboto,
} from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const charm = Charm({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-charm",
})

const roboto = Roboto({
	weight: ["400", "700", "800"],
	subsets: ["latin"],
	variable: "--font-roboto",
})

const ballet = Ballet({
	weight: ["400"],
	subsets: ["latin"],
	variable: "--font-ballet",
})

const cardo = Cardo({
	weight: ["400", "700"],
	subsets: ["latin"],
	variable: "--font-cardo",
})

export const metadata: Metadata = {
	title: "XV Leticia",
	description: "Meus 15 anos",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang="en"
			className={cn(
				"h-full",
				"antialiased",
				"font-sans",
				charm.variable,
				roboto.variable,
				ballet.variable,
				cardo.variable,
			)}
		>
			<body className="min-h-full flex flex-col">{children}</body>
		</html>
	)
}
