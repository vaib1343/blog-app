import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Terms and condition",
    description: "Terms and condition of anime news",
};

export default function TermsConditionLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className={inter.className}>{children}</div>;
}
