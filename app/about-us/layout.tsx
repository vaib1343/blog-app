import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "About us",
    description: "About us of",
};

export default function TermsConditionLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className={inter.className}>{children}</div>;
}
