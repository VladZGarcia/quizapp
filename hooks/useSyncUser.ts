"use client";

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";

export function useSyncUser() {
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const syncUser = async () => {
      try {
        await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            clerkUserId: user.id,
            email: user.primaryEmailAddress?.emailAddress,
            username: user.username || user.firstName,
          }),
        });
      } catch (error) {
        console.error("Failed to sync user:", error);
      }
    };

    syncUser();
  }, [user, isLoaded]);
}
