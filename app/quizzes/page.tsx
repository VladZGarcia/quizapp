"use client";
import HandleInput from "../../components/quiz/handle_input";
import Quiz from "../../components/quiz/Quiz";

export default function FlashcardsPage() {
  return (
    <div>
      <HandleInput />
      <p className="text-3xl font-bold mb-4">Quiz</p>
      <Quiz />
    </div>
  );
}
