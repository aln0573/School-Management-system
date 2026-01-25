"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useLogout } from "@/src/hooks/useLogout";

interface BaseProps {
  name: string;
  icon: LucideIcon;
}

interface LinkItemProps extends BaseProps {
  href: string;
  action?: never;
}

interface ActionItemProps extends BaseProps {
  action: "logout";
  href?: never;
}

type Props = LinkItemProps | ActionItemProps;

export default function SidebarItem(props: Props) {
  const pathname = usePathname();
  const logoutMutation = useLogout();

    // 🔥 Logout button
    if ("action" in props && props.action === "logout") {
      return (
        <button
          onClick={() => logoutMutation.mutate()}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted"
        >
          <props.icon size={18} />
          {props.name}
        </button>
      );
    }
    
    const active = pathname === props.href;
  return (
    
    <Link
      href={props.href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition",
        active
          ? "bg-muted text-foreground font-medium"
          : "text-muted-foreground hover:bg-muted"
      )}
    >
      <props.icon size={18} />
      {props.name}
    </Link>
  );
}
