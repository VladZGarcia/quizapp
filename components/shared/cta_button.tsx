"use client";

import { useRouter } from "next/navigation";

export default function CTAButton() {
  const router = useRouter();
  return (
    <button
      className="px-6 py-3 bg-gray-500 dark:bg-yellow-600 text-white font-semibold text-sm sm:text-base rounded-lg hover:bg-gray-400 dark:hover:bg-yellow-500 transition-all duration-200 shadow-md hover:shadow-lg hover:scale-105"
      onClick={() => router.push("/quizInput")}
    >
      Get Started
    </button>
  );
}
