"use client";

import AuthGuard from "@/src/components/auth/AuthGuard";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard allowedRoles={["super_admin"]}>{children}</AuthGuard>;
}
