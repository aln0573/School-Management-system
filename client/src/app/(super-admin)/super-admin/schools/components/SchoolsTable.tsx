"use client";

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
  schools?: School[]; // 👈 optional to prevent crash
  onEdit?: (school: School) => void;
  onDelete?: (id: string) => void;
  onView?: (school: School) => void;
}

/* ---------- COMPONENT ---------- */
export default function SchoolsTable({
  schools = [], // 👈 default empty array (IMPORTANT)
  onEdit,
  onDelete,
  onView,
}: SchoolsTableProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          {/* ---------- HEADER ---------- */}
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-4 text-left">School Name</th>
              <th>Admin Email</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Status</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          {/* ---------- BODY ---------- */}
          <tbody>
            {schools.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-10 text-gray-400"
                >
                  No schools available
                </td>
              </tr>
            ) : (
              schools.map((s) => (
                <tr
                  key={s.id}
                  className={`border-t transition-all duration-200 ${
                    s.highlight
                      ? "bg-indigo-50"
                      : "hover:bg-indigo-50/40"
                  }`}
                >
                  {/* Name */}
                  <td className="px-6 py-4 font-medium text-gray-800">
                    {s.name}
                  </td>

                  {/* Email */}
                  <td className="text-gray-600">{s.email}</td>

                  {/* Location */}
                  <td className="text-gray-600">{s.location}</td>

                  {/* Phone */}
                  <td className="text-gray-600">{s.phone}</td>

                  {/* Status */}
                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        s.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {s.status}
                    </span>
                  </td>

                  {/* Actions */}
                  <td>
                    <div className="flex justify-center gap-2">
                      {/* View */}
                      <button
                        onClick={() => onView?.(s)}
                        className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:scale-110 transition"
                      >
                        <Eye size={15} />
                      </button>

                      {/* Edit */}
                      <button
                        onClick={() => onEdit?.(s)}
                        className="w-9 h-9 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center hover:scale-110 transition"
                      >
                        <Pencil size={15} />
                      </button>

                      {/* Delete */}
                      <button
                        onClick={() => onDelete?.(s.id)}
                        className="w-9 h-9 rounded-full bg-red-100 text-red-600 flex items-center justify-center hover:scale-110 transition"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* ---------- PAGINATION (UI ONLY) ---------- */}
      {schools.length > 0 && (
        <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-t bg-gray-50">
          <span>
            Showing 1–{schools.length} of {schools.length}
          </span>

          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100">
              Prev
            </button>

            <span className="px-3 py-1 rounded-lg bg-indigo-600 text-white">
              1
            </span>

            <button className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}