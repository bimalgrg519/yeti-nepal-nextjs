import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeti Nepal — A studio for ambitious products.",
  description:
    "Yeti Nepal designs, ships, and scales software for teams who'd rather spend their time on customers than on coordination.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable} data-theme="dark">
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
