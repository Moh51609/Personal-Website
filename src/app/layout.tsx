import type { Metadata } from "next";
import { Lobster, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const lobster = Lobster({
  subsets: ["latin"],
  weight: ["400"], // Lobster hat meist nur 1 Gewicht
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Portfolio - Mohamed Amri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} ${lobster.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
