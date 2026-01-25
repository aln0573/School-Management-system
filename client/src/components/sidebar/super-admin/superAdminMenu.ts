import {
  Home,
  School,
  UserCog,
  CreditCard,
  ShieldCheck,
  BarChart3,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";


//dha93e3e3eheuh1uenu1h2euhe

export const superAdminMenu = [
  {
    label: "PLATFORM",
    items: [
      {
        name: "Home",
        href: "/super-admin",
        icon: Home,
      },
      {
        name: "Schools",
        href: "/super-admin/schools",
        icon: School,
      },
      {
        name: "Admins",
        href: "/super-admin/admins",
        icon: UserCog,
      },
      {
        name: "Subscriptions",
        href: "/super-admin/subscriptions",
        icon: CreditCard,
      },
      {
        name: "Plans",
        href: "/super-admin/plans",
        icon: ShieldCheck,
      },
      {
        name: "Analytics",
        href: "/super-admin/analytics",
        icon: BarChart3,
      },
      {
        name: "Logs",
        href: "/super-admin/logs",
        icon: FileText,
      },
    ],
  },
  {
    label: "OTHER",
    items: [
      {
        name: "Settings",
        href: "/super-admin/settings",
        icon: Settings,
      },
      {
        name: "Logout",
        action: "logout" as const,
        icon: LogOut,
      },
    ],
  },
];
