import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PADVEN Farms | Natu Kodi • Fresh Eggs • Pure Milk – From Our Farm To Your Home",
  description:
    "PADVEN Farms brings you natural country chicken (Natu Kodi), fresh farm eggs, pure buffalo milk, and dairy products directly from our farm in Andhra Pradesh. Village roots. Premium quality. Family trust.",
  keywords: [
    "PADVEN Farms",
    "Natu Kodi",
    "country chicken",
    "fresh eggs",
    "pure milk",
    "buffalo milk",
    "Andhra Pradesh farm",
    "desi chicken",
    "organic eggs",
    "farm fresh",
    "padvenfarms.com",
  ],
  authors: [{ name: "PADVEN Farms" }],
  creator: "PADVEN Farms",
  publisher: "PADVEN Farms",
  metadataBase: new URL("https://padvenfarms.com"),
  openGraph: {
    title: "PADVEN Farms | From Our Farm To Your Home",
    description:
      "Natural Natu Kodi, Fresh Eggs & Pure Milk from PADVEN Farms, Andhra Pradesh.",
    url: "https://padvenfarms.com",
    siteName: "PADVEN Farms",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PADVEN Farms | Natu Kodi • Fresh Eggs • Pure Milk",
    description: "Farm fresh products from PADVEN Farms, Andhra Pradesh.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
