"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { api } from "@/lib/api";

export default function useRoleGuard(allowedRoles: string[]) {
  const router = useRouter();

  useEffect(() => {
    const checkRole = async () => {
      try {
        const res = await api.get("/api/auth/me", {
          withCredentials: true,
        });

        const role = res.data.user.role;

        if (!allowedRoles.includes(role)) {
          router.replace("/unauthorized");
        }
      } catch (err) {
        router.replace("/login");
      }
    };

    checkRole();
  }, []);
}
