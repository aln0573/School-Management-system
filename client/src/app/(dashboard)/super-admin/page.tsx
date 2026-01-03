import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  School,
  UserCog,
  CreditCard,
  BarChart3,
} from "lucide-react";

export default function SuperAdminHome() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold">Super Admin Dashboard</h1>
        <p className="text-muted-foreground">
          Platform overview and management
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Schools"
          value="128"
          icon={<School className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Active Admins"
          value="342"
          icon={<UserCog className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Subscriptions"
          value="96"
          icon={<CreditCard className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Monthly Revenue"
          value="₹4.2L"
          icon={<BarChart3 className="h-5 w-5 text-primary" />}
        />
      </div>

      {/* Placeholder sections */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Schools</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Recently added schools will appear here.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>System Activity</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Platform logs and actions overview.
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  icon,
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
