"use client";
import { useSearchParams } from "next/navigation";
import HandleInput from "../../components/handle_input";
import Quiz from "../../components/Quiz";

export default function FlashcardsPage() {
  return (
    <div>
      <HandleInput />
      <p className="text-3xl font-bold mb-4">Quiz</p>
      <Quiz />
    </div>
  );
}
