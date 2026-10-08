import localFont from "next/font/local";

// All fonts located in 1 folder: src/fonts/
export const dmSans = localFont({
  src: "./DMSans.woff2",
  variable: "--font-dmsans",
  display: "swap",
  weight: "100 900",
});

export const inter = localFont({
  src: "./Inter.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "100 900",
});

export const syne = localFont({
  src: "./Syne.woff2",
  variable: "--font-syne",
  display: "swap",
  weight: "400 800",
});
