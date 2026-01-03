"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SidebarItem from "./SidebarItem";
import { superAdminMenu } from "./superAdminMenu";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 px-6 text-lg font-semibold">
        <span className="text-primary">🎓</span>
        EduManage
      </div>

      <ScrollArea className="h-[calc(100vh-4rem)] px-4">
        {superAdminMenu.map((section) => (
          <div key={section.label} className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase text-muted-foreground">
              {section.label}
            </p>

            <div className="space-y-1">
              {section.items.map((item) => (
                <SidebarItem
                  key={item.name}
                  name={item.name}
                  href={item.href}
                  icon={item.icon}
                />
              ))}
            </div>

            <Separator className="mt-4" />
          </div>
        ))}
      </ScrollArea>
    </aside>
  );
}
