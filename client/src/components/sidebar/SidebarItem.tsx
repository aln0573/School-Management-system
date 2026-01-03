"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props {
  name: string;
  href: string;
  icon: LucideIcon;
}

export default function SidebarItem({ name, href, icon: Icon }: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
        active
          ? "bg-muted text-foreground font-medium"
          : "text-muted-foreground hover:bg-muted"
      )}
    >
      <Icon size={18} />
      {name}
    </Link>
  );
}
