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
  description:
    "Portfolio of Jervis, a 3rd year CS student and Full-Stack Developer specializing in Next.js, Flutter, Python, and Machine Learning.",
  keywords: [
    "Full-Stack Developer",
    "Next.js",
    "Flutter",
    "Python",
    "Portfolio",
    "Web Developer",
    "Mobile Developer",
    "React",
    "TypeScript",
  ],
  authors: [{ name: "Jervis" }],
  openGraph: {
    title: "Jervis | Full-Stack Developer",
    description:
      "Portfolio of Jervis, a 3rd year CS student and Full-Stack Developer specializing in Next.js, Flutter, Python, and Machine Learning.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jervis | Full-Stack Developer",
    description:
      "Portfolio of Jervis, a 3rd year CS student and Full-Stack Developer specializing in Next.js, Flutter, Python, and Machine Learning.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-blue-600 selection:text-white dark:selection:bg-blue-500 dark:selection:text-white`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
