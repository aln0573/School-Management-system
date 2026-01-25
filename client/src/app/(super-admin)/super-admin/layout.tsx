"use client";

import useRoleGuard from "@/src/hooks/useRoleGuard";
import Sidebar from "../../../components/sidebar/super-admin/Sidebar";
import Loader from "@/src/components/Loader/Loader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 const { isLoading } = useRoleGuard(["super_admin"]);

// 🔥 Prevent flash
  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <Loader />
      </div>
    );
  }


  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-muted/40 p-6">
        {children}
      </main>
    </div>
  );
}
