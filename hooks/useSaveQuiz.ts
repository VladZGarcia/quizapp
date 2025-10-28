"use client";

import { useUser } from "@clerk/nextjs";
import { useCallback } from "react";

export function useSaveQuiz() {
  const { user } = useUser();

  const saveQuiz = useCallback(async (title: string, inputText: string, questions: any[]) => {
    if (!user?.id) {
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
  }, [user?.id]); // Only depend on user.id

  const getQuizzes = useCallback(async () => {
    if (!user?.id) return [];

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
  }, [user?.id]); // Only depend on user.id

  const deleteQuiz = useCallback(async (quizId: string) => {
    if (!user?.id) {
      throw new Error("You must be signed in to delete quizzes");
    }

    try {
      const response = await fetch(`/api/quizzes?quizId=${quizId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          clerkUserId: user.id,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to delete quiz");
      }

      return true;
    } catch (error) {
      console.error("Error deleting quiz:", error);
      throw error;
    }
  }, [user?.id]); // Only depend on user.id

  return { saveQuiz, getQuizzes, deleteQuiz };
}
