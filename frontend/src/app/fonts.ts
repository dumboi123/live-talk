import { Inter, JetBrains_Mono } from "next/font/google";

// Primary font for UI text
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  // Preload most common weights for chat app
  weight: ["400", "500", "600"],
});

// Monospace font for code blocks, timestamps
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500"],
});

// System font fallbacks - zero network cost
export const systemFont = {
  fontFamily: [
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
  ].join(", "),
};
