"use client";

import React, { useState, useEffect } from "react";

/* export default function HandleInput() {
  const [response, setResponse] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Read input from localStorage
    const saved = localStorage.getItem('quiz_input') || "";
    setInput(saved);
  }, []);

  useEffect(() => {
    if (!input) return;
    const prompt = `Create a set of quiz questions in the following JSON format:
[
  "use client";

  import React, { useState, useEffect } from "react";

  const { CohereClient } = require("cohere-ai");
  const cohere = new CohereClient({
    token: process.env.COHERE_API_KEY,
  }); */

export default function HandleInput() {
  const [response, setResponse] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Read input from localStorage
    const saved = localStorage.getItem("quiz_input") || "";
    setInput(saved);
  }, []);

  useEffect(() => {
    if (!input || input.trim().length === 0) {
      setError(
        "No input provided. Please enter text to generate quiz questions."
      );
      setResponse(null);
      setLoading(false);
      return;
    }
    setError(null);
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/cohere", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ input }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Unknown error");
        setResponse(data.content);
      } catch (e: any) {
        setError("Failed to fetch from Cohere AI: " + (e?.message || ""));
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [input]);

  // Extract JSON from Cohere response and save only the JSON array as quiz_response
  function extractJsonFromCohereResponse(resp: string): string | null {
    const match = resp.match(/```json\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      return match[1].trim();
    }
    return null;
  }

  useEffect(() => {
    if (response) {
      try {
        const jsonPart = extractJsonFromCohereResponse(response);
        if (jsonPart) {
          localStorage.setItem("quiz_response", jsonPart);
        } else {
          // fallback: save the whole response if JSON not found
          localStorage.setItem("quiz_response", response);
        }
      } catch (e) {
        console.error("Failed to save response to localStorage", e);
      }
    }
  }, [response]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Quiz Generation</h2>
      <div className="mb-2">
        <span className="font-semibold">Input:</span>
        <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap break-words max-h-32 overflow-auto">
          {input}
        </pre>
      </div>
      {loading && (
        <p className="text-blue-500">Generating quiz with Cohere AI...</p>
      )}
      {error && <p className="text-red-500">{error}</p>}
      {response && (
        <div className="mt-4">
          <span className="font-semibold">AI Response:</span>
          <pre className="bg-gray-100 p-2 rounded whitespace-pre-wrap break-words max-h-64 overflow-auto">
            {response}
          </pre>
        </div>
      )}
    </div>
  );
}
