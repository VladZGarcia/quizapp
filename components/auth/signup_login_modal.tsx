"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SignupLoginModal() {
  const router = useRouter();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget) {
      router.push("/");
    }
  };

  if (!mounted) {
    return (
      <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg">
          Loading...
        </div>
      </div>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <SignIn
        routing="hash"
        appearance={{
          variables: {
            colorPrimary: "#2563eb",
            colorBackground: isDark ? "#1f2937" : "#ffffff",
            colorInputBackground: isDark ? "#374151" : "#f9fafb",
            colorInputText: isDark ? "#f3f4f6" : "#111827",
            colorText: isDark ? "#f3f4f6" : "#111827",
            colorTextSecondary: isDark ? "#9ca3af" : "#6b7280",
            colorTextOnPrimaryBackground: "#ffffff",
            colorDanger: "#ef4444",
            colorSuccess: "#10b981",
            colorWarning: "#f59e0b",
            colorNeutral: isDark ? "#6b7280" : "#9ca3af",
            fontFamily: "var(--font-geist-sans)",
            fontSize: "0.875rem",
            borderRadius: "0.5rem",
          },
        }}
      />
    </div>
  );
}
