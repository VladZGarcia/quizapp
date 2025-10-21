"use client";
import { useState, useEffect } from "react";
import HandleInput from "../../components/quiz/handle_input";
import Quiz from "../../components/quiz/Quiz";

export default function FlashcardsPage() {
  const [hasQuestions, setHasQuestions] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Check if quiz questions are already available in localStorage on mount
    const checkQuestions = () => {
      if (typeof window !== "undefined") {
        const quizResponse = localStorage.getItem("quiz_response");
        if (quizResponse) {
          setHasQuestions(true);
        }
      }
    };

    checkQuestions();

    // Listen for quiz generation start
    const handleQuizGenerationStart = () => {
      setIsLoading(true);
      setHasQuestions(false);
    };

    // Listen for custom event from HandleInput when quiz is generated
    const handleQuizGenerated = () => {
      console.log("Quiz generated event received");
      setIsLoading(false);
      setHasQuestions(true);
      setKey((prev) => prev + 1); // Force Quiz component to remount with new data
    };

    window.addEventListener("quizGenerationStart", handleQuizGenerationStart);
    window.addEventListener("quizGenerated", handleQuizGenerated);

    return () => {
      window.removeEventListener(
        "quizGenerationStart",
        handleQuizGenerationStart
      );
      window.removeEventListener("quizGenerated", handleQuizGenerated);
    };
  }, []);

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col justify-center space-x-6">
      <HandleInput />

      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
          </div>
          <p className="mt-6 text-lg font-semibold text-gray-700 dark:text-gray-300">
            Generating your quiz questions...
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            This may take a few moments
          </p>
        </div>
      )}

      {hasQuestions && <Quiz key={key} />}
    </div>
  );
}
