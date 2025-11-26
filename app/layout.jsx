import "./globals.css";
import { Outfit } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
	title: "Bhuvan S A",
	description: "Portfolio of Bhuvan S A",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				{/* Umami Analytics */}
				<script
					defer
					src="https://cloud.umami.is/script.js"
					data-website-id="cdafa8d1-83ba-4f27-b0b9-34ca4bc5eb08"
				></script>
			</head>
			<body className={outfit.className}>
				<ThemeProvider attribute="class" defaultTheme="light">
					<Header />
					{children}
					<Analytics />
					<SpeedInsights />
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
