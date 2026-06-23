import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Luxury Resort | Unforgettable Experiences",
    template: "%s | Luxury Resort",
  },
  description:
    "Experience unparalleled luxury at our world-class resort destinations. Book your dream vacation today.",
  keywords: [
    "luxury resort",
    "vacation",
    "booking",
    "hotel",
    "travel",
    "premium",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Luxury Resort",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          playfair.variable,
          "font-sans antialiased"
        )}
      >
        {children}
      </body>
    </html>
  );
}
