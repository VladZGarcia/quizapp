"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import HandleInput from "./handle_input";

export default function FlashcardInput() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Save input to localStorage and navigate to /flashcards
    try {
      localStorage.setItem('quiz_input', input);
    } catch (e) {
      console.error('Failed to save input to localStorage', e);
    }
    router.push('/flashcards');
  }

  return (
    <section>
      <div className="mt-8 pt-24">
        <h1 className="text-3xl font-bold mb-4">QuizMaker</h1>
      </div>
      <div>
        <p className="mb-4">
          Welcome to QuizMaker! This app helps you create quizzes for studying. Enter a topic and the app will generate quiz questions for you.
        </p>
  <form onSubmit={handleSubmit}>
          <textarea
            className="border w-full p-2 mb-4 resize-y max-h-64 min-h-20 overflow-auto"
            placeholder="Enter a topic or large text..."
            rows={6}
            value={input}
            onChange={e => setInput(e.target.value)}
            required
          />
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded" disabled={loading}>
            {loading ? "Analyzing..." : "Generate Flashcards"}
          </button>
        </form>
      </div>
    </section>
  );
}
