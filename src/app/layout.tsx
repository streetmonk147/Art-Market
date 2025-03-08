import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import RootLayout from "@/components/layout/RootLayout";
import { Analytics } from '@vercel/analytics/react';

// Define fonts
const nunitoSans = Nunito_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-nunito-sans",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Artistry | Connecting Artists & Art Lovers Worldwide",
  description: "A vibrant platform connecting artists from various countries with potential buyers, promoting diverse art forms and cultural expressions.",
  keywords: ["art", "artists", "paintings", "sculptures", "global art", "buy art", "art marketplace"],
  authors: [{ name: "Artistry Team" }],
  creator: "Artistry",
  publisher: "Artistry",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://artistry.io",
    title: "Artistry | Global Art Marketplace",
    description: "Discover and collect exceptional art from around the world.",
    siteName: "Artistry",
  },
  twitter: {
    card: "summary_large_image",
    title: "Artistry | Global Art Marketplace",
    description: "Discover and collect exceptional art from around the world.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#141414" },
  ],
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <RootLayout>{children}</RootLayout>
        <Analytics />
      </body>
    </html>
  );
}
