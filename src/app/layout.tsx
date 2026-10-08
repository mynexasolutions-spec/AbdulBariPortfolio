import type { Metadata } from "next";
import { dmSans, inter, syne } from "@/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdul Bari — Co-Founder Nexa Solutions & Meagle 360",
  description:
    "Official portfolio of Abdul Bari, Co-Founder at Nexa Solutions and Meagle 360. Building high-growth tech solutions and strategic digital ventures.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${inter.variable} ${syne.variable} font-sans scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
