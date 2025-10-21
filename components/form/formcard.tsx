"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import TabButtons from "./tab_buttons";
import QuizTextInput from "./quiz_text_input";

export default function FormCard() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("new");
  const router = useRouter();
  const maxChars = 5000;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      localStorage.setItem("quiz_input", input);
    } catch (e) {
      console.error("Failed to save input to localStorage", e);
    }
    router.push("/quizzes");
  }

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value.length <= maxChars) {
      setInput(value);
    }
  }

  async function loadSampleText(topic: string) {
    try {
      const response = await fetch("/example.json");
      const data = await response.json();

      let sampleText = "";
      switch (topic) {
        case "ww2":
          sampleText = data.samples.ww2 || "";
          break;
        case "trivia":
          sampleText = data.samples.trivia || "";
          break;
        case "obama":
          sampleText = data.samples.obama || "";
          break;
        default:
          sampleText = "";
      }
      setInput(sampleText);
    } catch (error) {
      console.error("Failed to load sample text:", error);
    }
  }

  return (
    <div className="flex flex-col w-full max-w-3xl bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <TabButtons activeTab={activeTab} onTabChange={setActiveTab} />
      <hr className="mb-6 border-gray-300 dark:border-gray-600" />

      <form onSubmit={handleSubmit}>
        <QuizTextInput
          value={input}
          onChange={handleInputChange}
          maxChars={maxChars}
          onSampleClick={loadSampleText}
        />

        <div className="flex justify-center p-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 text-xs rounded hover:bg-blue-600 transition-colors"
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Generate Flashcards"}
          </button>
        </div>
      </form>
    </div>
  );
}
