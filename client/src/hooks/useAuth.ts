import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/lib/auth/auth";

export const useAuth = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });
};