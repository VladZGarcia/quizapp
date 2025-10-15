'use client';

import { useRouter } from "next/navigation";

export default function CTAButton() {
  const router = useRouter();
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-800 text-white rounded-xl hover:bg-blue-700"
      onClick={() => router.push("/quizInput")}
    >
      Get Started
    </button>
  );
}