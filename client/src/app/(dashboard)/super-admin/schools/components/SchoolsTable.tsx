import { Eye, Pencil, Trash2 } from "lucide-react";

/* ---------- TYPES ---------- */
export interface School {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  status: "Active" | "Inactive";
  highlight?: boolean;
}

interface SchoolsTableProps {
  schools: School[];
}

/* ---------- COMPONENT ---------- */
export default function SchoolsTable({ schools }: SchoolsTableProps) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="sticky top-0 bg-white z-10 text-gray-400 border-b">
            <tr>
              <th className="px-6 py-4 text-left">School Name</th>
              <th>Admin Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {schools.map((s) => (
              <tr
                key={s.id}
                className={`border-t transition ${
                  s.highlight ? "bg-indigo-50" : "hover:bg-gray-50"
                }`}
              >
                <td className="px-6 py-4 font-medium text-gray-800">
                  {s.name}
                </td>

                <td>{s.email}</td>
                <td>{s.location}</td>
                <td>{s.phone}</td>

                <td>
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      s.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {s.status}
                  </span>
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    <button className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      <Eye size={15} />
                    </button>

                    <button className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                      <Pencil size={15} />
                    </button>

                    <button className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center">
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (UI-only for now) */}
      <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-t">
        <span>Showing 1–{schools.length} of {schools.length}</span>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded bg-gray-100">Prev</button>
          <span className="px-3 py-1 rounded bg-indigo-100 text-indigo-600">
            1
          </span>
          <button className="px-3 py-1 rounded bg-gray-100">Next</button>
        </div>
      </div>
    </div>
  );
}
