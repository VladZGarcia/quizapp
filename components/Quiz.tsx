'use client';
import { useState } from "react";

type Question = {
  id: number;
  text: string;
  choices: string[];
  answerIndex: number;
};

const QUESTIONS: Question[] = [
  { id: 1, text: "What is 2 + 2?", choices: ["3", "4", "5"], answerIndex: 1 },
  {
    id: 2,
    text: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris"],
    answerIndex: 2,
  },
];

export default function Quiz() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = QUESTIONS[index];

  function choose(i: number) {
    if (i === q.answerIndex) setScore((s) => s + 1);
    if (index + 1 < QUESTIONS.length) setIndex(index + 1);
    else setFinished(true);
  }

  if (finished) {
    return (
      <div className="p-6 bg-white rounded shadow">
        <h2 className="text-2xl font-semibold">Result</h2>
        <p className="mt-2">
          You scored {score} / {QUESTIONS.length}
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold">{q.text}</h2>
      <div className="mt-4 space-y-2">
        {q.choices.map((c, i) => (
          <button
            key={i}
            onClick={() => choose(i)}
            className="block w-full text-left px-4 py-2 border rounded hover:bg-gray-100"
          >
            {c}
          </button>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Question {index + 1} / {QUESTIONS.length}
      </div>
    </div>
  );
}
