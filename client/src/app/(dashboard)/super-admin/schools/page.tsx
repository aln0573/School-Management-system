import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  School,
  Users,
  Plus,
} from "lucide-react";

export default function SchoolsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Schools</h1>
          <p className="text-muted-foreground">
            Manage all registered schools
          </p>
        </div>

        {/* Add School Button */}
        <Button className="gap-2">
          <Plus size={16} />
          Add School
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2">
        <StatCard
          title="Total Schools"
          value="128"
          icon={School}
        />
        <StatCard
          title="Active Schools"
          value="114"
          icon={Users}
        />
      </div>

      {/* School List */}
      <Card>
        <CardHeader>
          <CardTitle>School List</CardTitle>
        </CardHeader>

        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 text-left font-medium">
                  School Name
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  Admin email
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  Location
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  Phone No
                </th>
                <th className="px-4 py-3 text-left font-medium">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="px-4 py-3">
                  Green Valley Public School
                </td>
                <td className="px-4 py-3">
                  demo@gmail.com
                </td>
                <td className="px-4 py-3">
                  Kozhikode
                </td>
                <td className="px-4 py-3">
                  9512346780
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                    Active
                  </span>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-3">
                  Sunrise International School
                </td>
                <td className="px-4 py-3">
                  demo2@gmail.com
                </td>
                <td className="px-4 py-3">
                  Malappuram
                </td>
                <td className="px-4 py-3">
                  8121535678
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-yellow-100 px-2 py-1 text-xs text-yellow-700">
                    Inactive
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Stat Card ---------- */

function StatCard({
  title,
  value,
  icon: Icon,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div className="text-3xl font-bold">
          {value}
        </div>

        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}
