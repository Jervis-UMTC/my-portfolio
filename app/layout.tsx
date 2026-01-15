import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jervis | Full-Stack Developer",
  description: "Portfolio of Jervis, a 3rd year CS student and Full-Stack Developer specializing in Next.js, Flutter, and Python.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-600 selection:text-white dark:selection:bg-blue-500 dark:selection:text-white`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
