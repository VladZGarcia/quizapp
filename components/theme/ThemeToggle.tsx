"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <div className="w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700" />
    );
  }

  // Determine actual theme (resolving 'system' to actual theme)
  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    // Cycle through: system → light → dark → system
    if (theme === "system") {
      setTheme("light");
    } else if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("system");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center h-8 w-14 rounded-full
        transition-colors duration-300 ease-in-out
        ${isDark ? "bg-yellow-600" : "bg-gray-500"}
        hover:${isDark ? "bg-yellow-500" : "bg-gray-400"}
        focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2
      `}
      aria-label="Toggle theme"
      title={`Current: ${theme} mode${
        theme === "system" ? ` (${resolvedTheme})` : ""
      }`}
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
        {theme === "system" ? (
          <span className="text-xs" role="img" aria-label="System mode">
            💻
          </span>
        ) : isDark ? (
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
