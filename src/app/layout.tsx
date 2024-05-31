import Header from "@/components/shared/header";
import { css } from "@/styled-system/css";
import { Container } from "@/styled-system/jsx";
import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Next.js template",
	description:
		"Production-ready Next.js template powered by PandaCSS and HeadlessUI.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<Container>
					<main className={css({ py: "2em" })}>{children}</main>
				</Container>
			</body>
		</html>
	);
}
