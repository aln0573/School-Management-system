import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { School, Users, Plus } from "lucide-react";

export default function SchoolsDashboard() {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold">Schools</h1>
        <p className="text-muted-foreground">
          Manage all registered schools
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Total Schools"
          value="128"
          icon={<School className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Active Schools"
          value="114"
          icon={<Users className="h-5 w-5 text-primary" />}
        />
        <StatCard
          title="Add New School"
          value="Create"
          icon={<Plus className="h-5 w-5 text-primary" />}
        />
      </div>

      {/* School List Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle>School List</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          School table will be shown here.
        </CardContent>
      </Card>
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
      <CardHeader className="flex flex-row items-center justify-between pb-2">
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
