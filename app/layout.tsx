import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LEADS Next Gen Centre | India's Leadership & Skill Upliftment Hub",
  description:
    "LEADS Next Gen Centre is India's first non-technical leadership and skill upliftment centre — explore our summits, events, impact reports, and initiatives.",
  keywords: [
    "LEADS Next Gen Centre",
    "Bharath Leadership Summit",
    "Skill Upliftment India",
    "Leadership Training Bengaluru",
    "MSRUAS",
    "Non-Technical Leadership",
  ],
  authors: [{ name: "Kayomarz Pavri" }],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "LEADS Next Gen Centre | India's Leadership & Skill Upliftment Hub",
    description: "Building India's Next Generation of Leaders — summits, workshops, and skill upliftment.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" className={`dark ${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col antialiased bg-[#1E0C3D] text-white selection:bg-brand-gold selection:text-slate-950">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
