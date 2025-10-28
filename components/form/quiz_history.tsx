"use client";

import { useEffect, useState } from "react";
import { useSaveQuiz } from "@/hooks/useSaveQuiz";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

interface Quiz {
  id: string;
  title: string;
  input_text: string;
  questions: any[];
  created_at: string;
}

export default function QuizHistory() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const { getQuizzes } = useSaveQuiz();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    async function fetchQuizzes() {
      if (!user) {
        setLoading(false);
        return;
      }

      try {
        const data = await getQuizzes();
        setQuizzes(data);
      } catch (error) {
        console.error("Failed to load quizzes:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchQuizzes();
  }, [user, getQuizzes]);

  const handleQuizClick = (quiz: Quiz) => {
    // Store quiz data in localStorage
    localStorage.setItem("quiz_input", quiz.input_text);
    localStorage.setItem("quiz_questions", JSON.stringify(quiz.questions));
    localStorage.setItem("quiz_already_saved", "true"); // Mark as already saved

    // Navigate to quiz page
    router.push("/quizzes");
  };

  if (!user) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          Please sign in to view your quiz history.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Loading quizzes...
        </p>
      </div>
    );
  }

  if (quizzes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-400">
          No saved quizzes yet. Create your first quiz!
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
        Your Saved Quizzes ({quizzes.length})
      </h3>

      <div className="space-y-2 flex-1 overflow-y-auto pr-1 sm:pr-2">
        {quizzes.map((quiz) => (
          <button
            key={quiz.id}
            onClick={() => handleQuizClick(quiz)}
            className="w-full text-left p-3 sm:p-4 bg-gray-300 border-yellow-500 dark:bg-gray-700 rounded-lg border dark:border-gray-600 hover:border-yellow-400 dark:hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <div className="flex justify-between items-start gap-2">
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-sm sm:text-base text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {quiz.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-1 sm:line-clamp-2">
                  {quiz.input_text.substring(0, 100)}...
                </p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{quiz.questions?.length || 0} questions</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="text-xs">
                    {new Date(quiz.created_at).toLocaleDateString()}
                  </span>
                </div>
              </div>

              <svg
                className="h-4 w-4 sm:h-5 sm:w-5 text-gray-400 group-hover:text-blue-500 transition-colors flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
