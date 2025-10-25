"use client";

import { useSyncUser } from "@/hooks/useSyncUser";
import { ReactNode } from "react";

export function UserSyncWrapper({ children }: { children: ReactNode }) {
  useSyncUser();
  return <>{children}</>;
}
