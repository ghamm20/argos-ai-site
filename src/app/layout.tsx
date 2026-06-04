import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Argos-AI — AI-Powered Security Audits for Developers",
  description:
    "Argos-AI finds the vulnerabilities hiding in your codebase in minutes. AI-powered security audits covering exposed endpoints, auth gaps, technical debt, and port conflicts. $99 per audit.",
  keywords: [
    "security audit",
    "AI security",
    "code security",
    "vulnerability scanner",
    "developer security",
  ],
  openGraph: {
    title: "Argos-AI — AI-Powered Security Audits for Developers",
    description:
      "Find the vulnerabilities hiding in your codebase in minutes. $99 per audit.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-black">{children}</body>
    </html>
  );
}
