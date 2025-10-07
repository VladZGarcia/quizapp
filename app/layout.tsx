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
      <body className="bg-gray-50 text-gray-900">
        <main className="max-w-3xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
