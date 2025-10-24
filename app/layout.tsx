import { Navbar, Footer } from "../components/layout";
import "./globals.css";
import { ReactNode } from "react";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Geist, Geist_Mono, TikTok_Sans } from "next/font/google";
import { UserSyncWrapper } from "@/components/auth";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const tikTokSans = TikTok_Sans({
  variable: "--font-tiktok-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EZ Quiz Maker AI",
  description:
    "A EZ quiz Maker app built with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head>
          <link rel="icon" type="image/x-icon" href="/ez-logo-mini.png" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${tikTokSans.variable} antialiased bg-gray-300 dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors`}
          suppressHydrationWarning
        >
          <ThemeProvider>
            <UserSyncWrapper>
              <Navbar />
              <main className="pt-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
                {children}
              </main>
              <Footer />
            </UserSyncWrapper>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
