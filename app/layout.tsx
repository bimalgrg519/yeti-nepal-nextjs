import "./globals.css";

import type { Metadata } from "next";
import { Manrope } from "next/font/google";

import Footer from "./_components/Footer";
import Nav from "./_components/Nav";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yeti Nepal — A studio for ambitious products.",
  description:
    "Yeti Nepal designs, ships, and scales software for teams who'd rather spend their time on customers than on coordination.",
  openGraph: {
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
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
