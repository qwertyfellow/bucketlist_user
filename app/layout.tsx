import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const customFont = Ubuntu({
  variable: "--font-custom",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelX",
  description: "Discover great travel itineraries created by top travel influencers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${customFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
