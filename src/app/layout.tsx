
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});



export const metadata: Metadata = {
  title: "Genix Portfolio",
  description: "Portfolio de desarrollo web y IoT de Genix MVP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="inter.className"> 
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}
