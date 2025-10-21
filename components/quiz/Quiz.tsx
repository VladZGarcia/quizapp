"use client";
import { useState, useEffect } from "react";

type Question = {
  id: number;
  text: string;
  choices: string[];
  answerIndex: number;
};

function getQuestionsFromLocalStorage(): Question[] {
  if (typeof window === "undefined") return [];
  const saved = localStorage.getItem("quiz_response");
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error("Failed to parse quiz_response:", e);
    }
  }
  return [];
}

export default function Quiz() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [timer, setTimer] = useState(15); // seconds per question
  const [totalTime, setTotalTime] = useState(0); // total time spent

  useEffect(() => {
    const loadedQuestions = getQuestionsFromLocalStorage();
    console.log("Loaded questions:", loadedQuestions);
    setQuestions(loadedQuestions);
  }, []);

  const question = questions[index];

  // Timer effect
  useEffect(() => {
    if (finished) return;
    if (showFeedback) return; // pause timer on feedback
    if (timer === 0) {
      setShowFeedback(true);
      setSelected(null);
      return;
    }
    const t = setTimeout(() => setTimer(timer - 1), 1000);
    return () => clearTimeout(t);
  }, [timer, finished, showFeedback]);

  // Track total time
  useEffect(() => {
    if (finished) return;
    if (!showFeedback) {
      const t = setTimeout(() => setTotalTime((s) => s + 1), 1000);
      return () => clearTimeout(t);
    }
  }, [showFeedback, finished, totalTime]);

  function choose(i: number) {
    if (selected !== null) return; // prevent double answer
    setSelected(i);
    setShowFeedback(true);
    if (i === question.answerIndex) setScore((s) => s + 1);
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setShowFeedback(false);
      setTimer(15);
    } else {
      setFinished(true);
    }
  }

  function prev() {
    if (index > 0) {
      setIndex(index - 1);
      setSelected(null);
      setShowFeedback(false);
      setTimer(15);
    }
  }

  if (!question) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded shadow">
        <h2 className="text-2xl font-semibold">No quiz questions found</h2>
        <p className="mt-2">Please generate questions first.</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded shadow">
        <h2 className="text-2xl font-semibold">Result</h2>
        <p className="mt-2">
          You scored {score} / {questions.length}
        </p>
        <p className="mt-2">Total time: {totalTime} seconds</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            setIndex(0);
            setScore(0);
            setFinished(false);
            setSelected(null);
            setShowFeedback(false);
            setTimer(15);
            setTotalTime(0);
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded shadow">
      <p className="text-xl font-bold mb-4">Quiz</p>
      <h2 className="text-xl font-semibold">{question.text}</h2>
      <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Time left: {timer}s
      </div>
      <div className="mt-4 space-y-2">
        {question.choices.map((c, i) => (
          <button
            key={i}
            onClick={() => choose(i)}
            disabled={selected !== null || showFeedback || timer === 0}
            className={`block w-full text-left px-4 py-2 border rounded text-gray-900 dark:text-gray-100
              ${
                selected === i
                  ? i === question.answerIndex
                    ? "bg-green-200 dark:bg-green-700"
                    : "bg-red-200 dark:bg-red-700"
                  : "bg-white dark:bg-gray-700"
              }
              ${
                showFeedback && i === question.answerIndex
                  ? "border-green-500"
                  : "border-gray-300 dark:border-gray-600"
              }
              ${selected !== null && selected !== i ? "opacity-60" : ""}
              hover:bg-gray-100 dark:hover:bg-gray-600`}
          >
            {c}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="mt-4">
          {selected === question.answerIndex ? (
            <span className="text-green-600 dark:text-green-400 font-semibold">
              Correct!
            </span>
          ) : (
            <span className="text-red-600 dark:text-red-400 font-semibold">
              {selected === null ? "Time is up!" : "Incorrect."} Correct answer:{" "}
              {question.choices[question.answerIndex]}
            </span>
          )}
        </div>
      )}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={prev}
          disabled={index === 0}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 disabled:opacity-50"
        >
          Back
        </button>
        {showFeedback ? (
          <button
            onClick={next}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            {index + 1 === questions.length ? "Finish" : "Next"}
          </button>
        ) : (
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Select an answer
          </span>
        )}
      </div>
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        Question {index + 1} / {questions.length}
      </div>
    </div>
  );
}
