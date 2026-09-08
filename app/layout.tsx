import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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
    <html lang="en" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('leads_theme_pref');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-brand-gold selection:text-slate-950">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
