"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

export default function useRoleGuard(allowedRoles: string[]) {
  const router = useRouter();
  const { user, isLoading, isError } = useAuth();

  useEffect(() => {
    if (isLoading) return; // ⛔ wait for uth check

    if (!user ) {
      router.replace("/login");
      return;
    }

    if (!allowedRoles.includes(user.role)) {
      router.replace("/unauthorized");
    }
  }, [user, isLoading, router, allowedRoles]);

  return { isLoading };
}
