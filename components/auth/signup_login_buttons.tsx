"use client";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
  useAuth,
} from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function SignupLoginButtons() {
  const pathname = usePathname();
  const { isSignedIn } = useAuth();

  // Clear quiz-related localStorage if user is signed out
  useEffect(() => {
    if (!isSignedIn) {
      localStorage.removeItem("quiz_input");
      localStorage.removeItem("quiz_questions");
      localStorage.removeItem("quiz_response");
      localStorage.removeItem("quiz_already_saved");
    }
  }, [isSignedIn]);
  return (
    <div className="flex items-center gap-3">
      <SignedOut>
        <SignInButton mode="modal" forceRedirectUrl={pathname}>
          <button className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium text-sm rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200">
            Sign In
          </button>
        </SignInButton>
        <SignUpButton mode="modal" forceRedirectUrl={pathname}>
          <button className="px-4 py-2 bg-yellow-500 dark:bg-yellow-600 text-white font-semibold text-sm rounded-lg hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-all duration-200 shadow-sm hover:shadow-md">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <UserButton
          appearance={{
            elements: {
              avatarBox:
                "w-9 h-9 ring-2 ring-yellow-500 dark:ring-yellow-600 hover:ring-yellow-400 dark:hover:ring-yellow-500 transition-all",
              card: "!z-[100]",
              popoverContent: "!z-[100]",
              userPreviewMainIdentifier: "!z-[100]",
              userPreviewTextContainer: "!z-[100]",
              userButtonPopover: "!z-[100] relative",
            },
          }}
          signInUrl="/sign-in"
        />
      </SignedIn>
    </div>
  );
}
