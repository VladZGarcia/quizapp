"use client";
import { useEffect } from "react";
import { FormCard } from "../form";

export default function FlashcardInput() {
  useEffect(() => {
    // Clear old quiz data when user returns to input page
    if (typeof window !== "undefined") {
      localStorage.removeItem("quiz_response");
    }
  }, []);
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] space-y-6">
      <div className="mt-8 pt-6">
        <h1 className="text-3xl font-bold mb-4">QuizMaker</h1>
      </div>
      <p className="p-4">
        Welcome to QuizMaker! This app helps you create quizzes for studying.
        Enter a topic and the app will generate quiz questions for you.
      </p>
      <FormCard />
    </section>
  );
}
