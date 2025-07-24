import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora } from "next/font/google";
import ScrollbarManager from "@/components/ui/ScrollbarManager";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Dubai Signature Estates | Luxury Real Estate",
  description: "Find your signature address in Dubai with our exclusive collection of ultra-luxury properties",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`${inter.variable} ${playfair.variable} ${lora.variable} antialiased font-inter bg-pearl-white text-rich-navy overflow-x-hidden`}
      >
        <ScrollbarManager />
        {children}
      </body>
    </html>
  );
}
