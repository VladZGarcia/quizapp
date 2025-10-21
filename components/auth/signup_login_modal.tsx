"use client";

import { SignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export function SignupLoginModal() {
  const router = useRouter();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop itself, not the modal content
    if (e.target === e.currentTarget) {
      router.push("/");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
      onClick={handleBackdropClick}
    >
      <SignIn routing="hash" />
    </div>
  );
}
