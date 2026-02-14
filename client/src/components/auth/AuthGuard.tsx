"use strict";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";
import Loader from "@/src/components/Loader/Loader";

interface AuthGuardProps {
  children: React.ReactNode;
  allowedRoles?: string[];
}

const AuthGuard = ({ children, allowedRoles }: AuthGuardProps) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace("/login");
      } else if (allowedRoles && !allowedRoles.includes(user.role)) {
        router.replace("/"); // Or a generic unauthorized page
      }
    }
  }, [user, isLoading, router, allowedRoles]);

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (!user) {
      return null;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
      return null;
  }

  return <>{children}</>;
};

export default AuthGuard;
