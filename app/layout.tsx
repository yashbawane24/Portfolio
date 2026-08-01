import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { Loader } from "@/components/Loader/Loader";
import { Cursor } from "@/components/Cursor/Cursor";
import { Background } from "@/components/Background/Background";
import { siteConfig } from "@/constants/config";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — Software Engineer & AI Developer`,
  description: siteConfig.tagline,
  keywords: ["Yash Bawane", "Software Engineer", "Full Stack Developer", "AI Developer", "VIT Vellore"],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    title: `${siteConfig.name} — Software Engineer & AI Developer`,
    description: siteConfig.tagline,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Software Engineer & AI Developer`,
    description: siteConfig.tagline,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} font-sans font-light cursor-none md:cursor-none`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Loader />
            <Background />
            <Cursor />
            <Navbar />
            <main className="relative z-[2]">{children}</main>
            <Footer />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
