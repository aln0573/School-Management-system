import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginUser } from "@/lib/auth/auth";

export const useLogin = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["me"] });
    }
  });
};