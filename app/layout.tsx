import Navbar from "../components/navbar";
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "QuizApp",
  description:
    "A simple quiz app built with Next.js, TypeScript and Tailwind CSS",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/ez-logo-mini.png" />
      </head>
      <body className="">
        <header>
          <Navbar />
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
