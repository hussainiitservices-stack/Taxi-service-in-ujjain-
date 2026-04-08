import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.taxiservicesinujjain.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Best Car & Taxi Service in Ujjain | Mahakaleshwar Darshan",
    template: "%s | Car Taxi Service Ujjain",
  },
  description:
    "Affordable and reliable car rental and taxi service in Ujjain. Book cabs for local sightseeing, Mahakaleshwar Darshan, Indore airport pickup, and outstation trips.",
  keywords: [
    "taxi service in ujjain",
    "ujjain to indore taxi",
    "mahakaleshwar darshan taxi",
    "car rental ujjain",
    "ujjain local sightseeing cab",
    "indore airport to ujjain taxi",
    "outstation taxi ujjain",
    "ujjain taxi booking",
  ],
  authors: [{ name: "Car Taxi Service Ujjain" }],
  creator: "Car Taxi Service Ujjain",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    title: "Best Car & Taxi Service in Ujjain | Mahakaleshwar Darshan",
    description:
      "Affordable and reliable car rental and taxi service in Ujjain. Book cabs for local sightseeing, Mahakaleshwar Darshan, Indore airport pickup, and outstation trips.",
    siteName: "Car Taxi Service Ujjain",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Car & Taxi Service in Ujjain | Mahakaleshwar Darshan",
    description:
      "Affordable and reliable car rental and taxi service in Ujjain. Book cabs for local sightseeing.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
