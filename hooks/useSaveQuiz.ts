"use client";

import { useUser } from "@clerk/nextjs";

export function useSaveQuiz() {
  const { user } = useUser();

  const saveQuiz = async (title: string, inputText: string, questions: any[]) => {
    if (!user) {
      throw new Error("You must be signed in to save quizzes");
    }

    try {
      const response = await fetch("/api/quizzes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
          title,
          inputText,
          questions,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to save quiz");
      }

      const data = await response.json();
      return data.quiz;
    } catch (error) {
      console.error("Error saving quiz:", error);
      throw error;
    }
  };

  const getQuizzes = async () => {
    if (!user) return [];

    try {
      const response = await fetch(`/api/quizzes?clerkUserId=${user.id}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch quizzes");
      }

      const data = await response.json();
      return data.quizzes;
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      return [];
    }
  };

  return { saveQuiz, getQuizzes };
}
