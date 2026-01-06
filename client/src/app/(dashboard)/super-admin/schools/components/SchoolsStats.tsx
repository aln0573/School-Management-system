import { School, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <div className="text-3xl font-bold">{value}</div>
        <div className="rounded-full bg-primary/10 p-3">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function SchoolsStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <StatCard title="Total Schools" value="128" icon={School} />
      <StatCard title="Active Schools" value="114" icon={Users} />
    </div>
  );
}
