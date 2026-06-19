import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFab from "@/components/ui/WhatsAppFab";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: { default: "AgaDream — Appartements à Agadir", template: "%s — AgaDream" },
  description:
    "Découvrez les meilleurs appartements à Agadir sélectionnés et testés par l'influenceur AgaDream, avec ses coups de cœur restaurants, plages et activités à proximité.",
  metadataBase: new URL("https://agadream.ma"),
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  },
  openGraph: {
    siteName: "AgaDream",
    locale: "fr_FR",
    type: "website",
    images: [{ url: "https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${fraunces.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-sand-50 text-stone-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
