"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`
        relative inline-flex items-center h-8 w-14 rounded-full
        transition-colors duration-300 ease-in-out
        ${isDark ? "bg-yellow-600" : "bg-gray-500"}
        hover:${isDark ? "bg-yellow-500" : "bg-gray-400"}
        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
      `}
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? "light" : "dark"} mode`}
      role="switch"
      aria-checked={isDark}
    >
      {/* Switch Circle */}
      <span
        className={`
          inline-flex items-center justify-center h-6 w-6 rounded-full
          bg-white dark:bg-gray-500 shadow-md transform transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-7" : "translate-x-1"}
        `}
      >
        {isDark ? (
          <span className="text-sm" role="img" aria-label="Dark mode">
            🌙
          </span>
        ) : (
          <span className="text-sm" role="img" aria-label="Light mode">
            ☀️
          </span>
        )}
      </span>
    </button>
  );
}
