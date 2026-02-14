"use client";

import React from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Home, Users, User, BookOpen, Layers, FileText,
  ClipboardList, BarChart2, Calendar, MessageSquare,
  Megaphone, LogOut, Menu, X
} from "lucide-react";

const menuItems = [
  { label: "Home", icon: Home, path: "/home" },
  { label: "Teachers", icon: Users, path: "/teachers" },
  { label: "Students", icon: User, path: "/admin/students" },
  { label: "Parents", icon: Users, path: "/admin/parents" },
  { label: "Subjects", icon: BookOpen, path: "/admin/subjects" },
  { label: "Classes", icon: Layers, path: "/admin/classes" },
  { label: "Lessons", icon: FileText, path: "/admin/lessons" },
  { label: "Exams", icon: ClipboardList, path: "/admin/exams" },
  { label: "Assignments", icon: FileText, path: "/admin/assignments" },
  { label: "Results", icon: BarChart2, path: "/admin/results" },
  { label: "Attendance", icon: Calendar, path: "/admin/attendance" },
  { label: "Events", icon: Calendar, path: "/admin/events" },
  { label: "Messages", icon: MessageSquare, path: "/admin/messages" },
  { label: "Announcements", icon: Megaphone, path: "/admin/announcements" },
];

interface SidebarContentProps {
  pathname: string;
  router: ReturnType<typeof useRouter>;
  setOpen: (open: boolean) => void;
}

const SidebarContent = ({ pathname, router, setOpen }: SidebarContentProps) => (
  <div className="w-64 bg-white h-full flex flex-col border-r">
    {/* Logo */}
    <div className="flex items-center gap-2 px-6 py-5">
      <div className="h-8 w-8 rounded-full bg-linear-to-br from-teal-400 to-indigo-500" />
      <span className="font-semibold text-lg">SchoolLama</span>
    </div>

    {/* Menu */}
    <div className="px-4 flex-1 overflow-y-auto">
      <p className="text-xs text-gray-400 uppercase mb-3">Menu</p>
      {menuItems.map((item) => {
        const active = pathname === item.path;
        return (
          <div
            key={item.label}
            onClick={() => {
              router.push(item.path);
              setOpen(false);
            }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
              ${active ? "bg-indigo-50 text-indigo-600" : "text-gray-600 hover:bg-gray-100"}
            `}
          >
            <item.icon size={18} />
            <span className="text-sm">{item.label}</span>
          </div>
        );
      })}
    </div>

    {/* Logout */}
    <div className="px-4 pb-6">
      <div
        onClick={() => router.push("/login")}
        className="flex items-center gap-3 px-3 py-2 rounded-lg text-red-500 hover:bg-red-50 cursor-pointer"
      >
        <LogOut size={18} />
        Logout
      </div>
    </div>
  </div>
);

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
        onClick={() => setOpen(true)}
      >
        <Menu />
      </button>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block">
        <SidebarContent pathname={pathname} router={router} setOpen={setOpen} />
      </aside>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <div className="relative">
            <SidebarContent pathname={pathname} router={router} setOpen={setOpen} />
            <button
              className="absolute top-4 right-4"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
