"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeDebug() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-xs z-50">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <div className="space-y-1">
        <p>
          <strong>Current theme:</strong> {theme}
        </p>
        <p>
          <strong>System theme:</strong> {systemTheme}
        </p>
        <p>
          <strong>Resolved theme:</strong> {resolvedTheme}
        </p>
        <p>
          <strong>HTML class:</strong>{" "}
          {document.documentElement.classList.contains("dark")
            ? "dark"
            : "light"}
        </p>
      </div>
      <button
        onClick={() => setTheme("system")}
        className="mt-3 px-3 py-1 bg-blue-500 text-white rounded text-xs hover:bg-blue-600"
      >
        Reset to System
      </button>
    </div>
  );
}
