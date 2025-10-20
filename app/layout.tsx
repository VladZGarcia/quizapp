import Navbar from "../components/navbar";
import "./globals.css";
import { ReactNode } from "react";
import { type Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
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
      <html lang="en">
        <head>
          <link rel="icon" type="image/x-icon" href="/ez-logo-mini.png" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning
        >
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Navbar />
          </header>
          <main className="max-w-3xl mx-auto p-6">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
