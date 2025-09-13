import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

// Mantine
import "@mantine/core/styles.css";
import {
  ColorSchemeScript,
  MantineProvider,
  createTheme,
} from "@mantine/core";

// Load Ubuntu font
const customFont = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-customfont", // creates a CSS variable
  display: "swap",
});

const theme = createTheme({
  fontFamily: "var(--font-customfont), sans-serif",
  headings: { fontFamily: "var(--font-customfont), sans-serif" },
  colors: {
    brand: [
      "#ffe3e8",
      "#ffb3c0",
      "#ff8299",
      "#f75270",
      "#d93c5b",
      "#b32f49",
      "#8c2237",
      "#661626",
      "#400b16",
      "#1e0006",
    ],
  },
  primaryColor: "brand",
  primaryShade: 4
});

export const metadata: Metadata = {
  title: "TravelX",
  description:
    "Discover great travel itineraries created by top travel influencers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={customFont.variable}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
