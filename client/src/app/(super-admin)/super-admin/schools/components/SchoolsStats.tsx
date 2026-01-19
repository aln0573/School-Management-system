import { School, Users } from "lucide-react";

function StatCard({
  title,
  value,
  icon: Icon,
  color,
}: {
  title: string;
  value: string;
  icon: React.ElementType;
  color: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-3xl font-semibold text-gray-800 mt-1">
          {value}
        </p>
      </div>

      <div className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
}

export default function SchoolsStats() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 mb-6">
      <StatCard
        title="Total Schools"
        value="128"
        icon={School}
        color="bg-indigo-100 text-indigo-600"
      />
      <StatCard
        title="Active Schools"
        value="114"
        icon={Users}
        color="bg-green-100 text-green-600"
      />
    </div>
  );
}
