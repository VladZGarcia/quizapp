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
      <body className="" suppressHydrationWarning={true}>
        <header className=" shadow p-6 mb-6 fixed top-0 left-0 right-0">
          <h2 className="text-2xl font-bold">EZ Quiz Maker AI</h2>
        </header>
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
