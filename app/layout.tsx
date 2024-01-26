import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppHeader from "@/components/Home/Header";
import AppFooter from "@/components/Home/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Anime",
    description: "Anime related news",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2183344272256536"
                    crossOrigin="anonymous"
                ></script>
            </head>

            <body className={inter.className}>
                <AppHeader />
                {children}
                <AppFooter />
            </body>
        </html>
    );
}
