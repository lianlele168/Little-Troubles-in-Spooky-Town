import type { Metadata } from "next";
import { Fredoka, Nunito_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: "Little Troubles in Spooky Town Guide ",
    template: "%s | Little Troubles Guide",
  },
  description: site.description,
  keywords: [
    "Little Troubles in Spooky Town guide",
    "Little Troubles in Spooky Town walkthrough",
    "Little Troubles in Spooky Town tasks",
    "Little Troubles in Spooky Town how to fly",
    "Little Troubles in Spooky Town bottles",
    "Little Troubles in Spooky Town flowers",
  ],
  openGraph: {
    type: "website",
    url: "/",
    siteName: site.name,
    title: "Little Troubles in Spooky Town Guide - All 11 Tasks",
    description: site.description,
    images: [{ url: "/gameplay-town-wide.png", width: 794, height: 446, alt: "Little Troubles in Spooky Town title screen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Troubles in Spooky Town Guide - All 11 Tasks",
    description: site.description,
    images: ["/gameplay-town-wide.png"],
  },
  icons: { icon: "/favicon.svg", apple: "/cover.png" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${nunito.variable} ${fredoka.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
