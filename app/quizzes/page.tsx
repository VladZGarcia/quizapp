"use client";
import HandleInput from "../../components/quiz/handle_input";
import Quiz from "../../components/quiz/Quiz";

export default function FlashcardsPage() {
  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center space-x-6">
      <HandleInput />
      <p className="text-xl font-bold mb-4">Quiz</p>
      <Quiz />
    </div>
  );
}
