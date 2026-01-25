"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logoutUser } from "@/lib/auth/auth";
import { useRouter } from "next/navigation";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logoutUser,
    onSuccess: () => {
      // 🔥 clear auth cache
      queryClient.removeQueries({ queryKey: ["me"] });

      // 🔥 redirect
      router.replace("/login");
    },
  });
};
