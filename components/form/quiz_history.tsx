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
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [quizToDelete, setQuizToDelete] = useState<Quiz | null>(null);
  const { getQuizzes, deleteQuiz } = useSaveQuiz();
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    let mounted = true;
    let fetchTimeout: NodeJS.Timeout;

    async function fetchQuizzes() {
      if (!user?.id || !mounted) {
        setLoading(false);
        return;
      }

      // Debounce the fetch call to prevent double fetching
      fetchTimeout = setTimeout(async () => {
        try {
          const data = await getQuizzes();
          if (mounted) {
            setQuizzes(data);
          }
        } catch (error) {
          console.error("Failed to load quizzes:", error);
        } finally {
          if (mounted) {
            setLoading(false);
          }
        }
      }, 0);
    }

    if (user?.id) {
      fetchQuizzes();
    } else {
      setLoading(false);
    }

    return () => {
      mounted = false;
      clearTimeout(fetchTimeout);
    };
  }, [user?.id, getQuizzes]);

  const handleQuizClick = (quiz: Quiz) => {
    // Store quiz data in localStorage
    localStorage.setItem("quiz_input", quiz.input_text);
    localStorage.setItem("quiz_questions", JSON.stringify(quiz.questions));
    localStorage.setItem("quiz_already_saved", "true"); // Mark as already saved

    // Navigate to quiz page
    router.push("/quizzes");
  };

  const handleDeleteClick = (e: React.MouseEvent, quiz: Quiz) => {
    e.stopPropagation(); // Prevent triggering the parent button click
    setQuizToDelete(quiz);
    setShowDeleteModal(true);
  };

  const handleConfirmDelete = async () => {
    if (!quizToDelete) return;

    try {
      await deleteQuiz(quizToDelete.id);
      setQuizzes(quizzes.filter((q) => q.id !== quizToDelete.id));
      setShowDeleteModal(false);
      setQuizToDelete(null);
    } catch (error) {
      console.error("Failed to delete quiz:", error);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setQuizToDelete(null);
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
    <div className="flex flex-col h-[500px]">
      <h3 className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
        Your Saved Quizzes ({quizzes.length})
      </h3>

      <div className="space-y-2 flex-1 overflow-y-auto pr-1 sm:pr-2 max-h-[440px]">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            onClick={() => handleQuizClick(quiz)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                handleQuizClick(quiz);
              }
            }}
            className="w-full text-left p-3 sm:p-4 bg-gray-300 border-yellow-500 dark:bg-gray-700 rounded-lg border dark:border-gray-600 hover:border-yellow-400 dark:hover:border-blue-400 hover:shadow-md transition-all group cursor-pointer"
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

              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => handleDeleteClick(e, quiz)}
                  className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                  title="Delete quiz"
                >
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
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
            </div>
          </div>
        ))}
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 w-full">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">
              Delete Quiz
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Are you sure you want to delete this quiz? This action cannot be
              undone.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleCancelDelete}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md transition-colors"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
