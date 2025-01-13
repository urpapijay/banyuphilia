import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import localFont from 'next/font/local';

const monumentRegular = localFont({
  src: '../public/fonts/MonumentExtended-Regular.otf',
  variable: '--font-monument-regular'
});

const monumentUltrabold = localFont({
  src: '../public/fonts/MonumentExtended-Ultrabold.otf',
  variable: '--font-monument-ultrabold'
});

const twister = localFont({
  src: '../public/fonts/Twister.ttf',
  variable: '--font-twister'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: "BANYU.PHILIA",
  description: "Music Producer & Composer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${monumentRegular.variable} ${monumentUltrabold.variable} ${twister.variable} ${jetbrainsMono.variable}`}>
      <body className={`${jetbrainsMono.className} bg-dark text-light`}>{children}</body>
    </html>
  );
}