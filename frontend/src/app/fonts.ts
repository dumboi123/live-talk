import { Inter, JetBrains_Mono } from "next/font/google";

// Primary font for UI text
export const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-inter",
  // Preload most common weights for chat app
  weight: ["400", "500", "600", "700"],
});

// Monospace font for code blocks, timestamps
export const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});
