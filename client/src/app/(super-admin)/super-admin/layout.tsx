"use client";

import useRoleGuard from "@/src/hooks/useRoleGuard";
import Sidebar from "../../../components/sidebar/super-admin/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 useRoleGuard(["super_admin"]);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 bg-muted/40 p-6">
        {children}
      </main>
    </div>
  );
}
