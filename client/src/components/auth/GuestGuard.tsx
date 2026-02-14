"use strict";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/src/hooks/useAuth";
import Loader from "@/src/components/Loader/Loader";

interface GuestGuardProps {
  children: React.ReactNode;
}

const GuestGuard = ({ children }: GuestGuardProps) => {
  const { user, isLoading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
        switch (user.role) {
            case "super_admin":
              router.replace("/super-admin");
              break;
      
            case "admin":
              router.replace("/home");
              break;
      
            case "teacher":
              router.replace("/teacher/dashboard");
              break;
      
            case "school":
              router.replace("/school/dashboard");
              break;
      
            case "parent":
              router.replace("/parent/dashboard");
              break;
      
            case "student":
              router.replace("/student/dashboard");
              break;
      
            default:
              router.replace("/");
        }
    }
  }, [user, isLoading, router]);

  if (isLoading || user) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  return <>{children}</>;
};

export default GuestGuard;
