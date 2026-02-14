"use client";

import NextImage from "next/image";
import { Search, Eye, Pencil, Trash2, Plus } from "lucide-react";

/* ---------------- DATA ---------------- */
const teachers = [
  {
    name: "John Doe",
    email: "john@doe.com",
    avatar: "https://i.pravatar.cc/40?img=1",
    id: "7419380756",
    subjects: ["Math", "Geometry"],
    classes: ["1B", "2A", "3C"],
    phone: "7283941",
    address: "512 Main St, Anytown, USA",
    highlight: true,
  },
  {
    name: "Dean Guerrero",
    email: "dean@school.com",
    avatar: "https://i.pravatar.cc/40?img=2",
    id: "2304567890",
    subjects: ["Physics", "Chemistry"],
    classes: ["5A", "4B", "3C"],
    phone: "8027856",
    address: "597 Main St, Anytown, USA",
  },
  {
    name: "Mike Geller",
    email: "mike@geller.com",
    avatar: "https://i.pravatar.cc/40?img=3",
    id: "5534567890",
    subjects: ["Biology"],
    classes: ["5A", "4B"],
    phone: "2744534",
    address: "841 Main St, Anytown, USA",
  },
  {
    name: "Jay French",
    email: "jay@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=4",
    id: "7844567890",
    subjects: ["History"],
    classes: ["3C", "2B"],
    phone: "5481430",
    address: "997 Main St, Anytown, USA",
  },
  {
    name: "Jane Smith",
    email: "jane@school.com",
    avatar: "https://i.pravatar.cc/40?img=5",
    id: "1254567890",
    subjects: ["Music", "History"],
    classes: ["4A", "3B"],
    phone: "7401901",
    address: "209 Main St, Anytown, USA",
  },
  {
    name: "Anna Santiago",
    email: "anna@gmail.com",
    avatar: "https://i.pravatar.cc/40?img=6",
    id: "2144567890",
    subjects: ["Physics"],
    classes: ["5A"],
    phone: "7095867",
    address: "775 Main St, Anytown, USA",
  },
  {
    name: "Allen Black",
    email: "allen@black.com",
    avatar: "https://i.pravatar.cc/40?img=7",
    id: "1754567890",
    subjects: ["English", "Spanish"],
    classes: ["4B", "3C"],
    phone: "8977388",
    address: "103 Main St, Anytown, USA",
  },
  {
    name: "Ophelia Castro",
    email: "ophelia@castro.com",
    avatar: "https://i.pravatar.cc/40?img=8",
    id: "8844567890",
    subjects: ["Math", "Geometry"],
    classes: ["2A", "1C"],
    phone: "5652552",
    address: "363 Main St, Anytown, USA",
  },
  {
    name: "Derek Briggs",
    email: "derek@briggs.com",
    avatar: "https://i.pravatar.cc/40?img=9",
    id: "7334567890",
    subjects: ["Literature", "English"],
    classes: ["5B"],
    phone: "16119132",
    address: "313 Main St, Anytown, USA",
  },
  {
    name: "John Glover",
    email: "john@glover.com",
    avatar: "https://i.pravatar.cc/40?img=10",
    id: "8024567890",
    subjects: ["Biology"],
    classes: ["4A", "3A"],
    phone: "10571924",
    address: "939 Main St, Anytown, USA",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function TeachersPage() {
  return (
    <div className="bg-[#F6F7FB] min-h-screen p-4 sm:p-6">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          All Teachers
        </h2>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search teachers..."
              className="pl-9 pr-4 py-2 rounded-full bg-white border text-sm outline-none w-full sm:w-64"
            />
          </div>

          <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow">
            <Plus size={16} /> Add Teacher
          </button>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET TABLE ================= */}
      <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="sticky top-0 bg-white z-10 text-gray-400 border-b">
              <tr>
                <th className="px-6 py-4 text-left">Info</th>
                <th>Teacher ID</th>
                <th>Subjects</th>
                <th>Classes</th>
                <th>Phone</th>
                <th>Address</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {teachers.map((t, i) => (
                <tr
                  key={i}
                  className={`border-t transition ${
                    t.highlight
                      ? "bg-indigo-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  {/* INFO */}
                  <td className="px-6 py-4 flex items-center gap-3">
                    <NextImage
                      src={t.avatar}
                      alt={t.name}
                      width={40}
                      height={40}
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-gray-800">
                        {t.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        {t.email}
                      </p>
                    </div>
                  </td>

                  <td>{t.id}</td>

                  <td>
                    <div className="flex gap-2 flex-wrap">
                      {t.subjects.map((s) => (
                        <span
                          key={s}
                          className="px-2 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td>
                    <div className="flex gap-2 flex-wrap">
                      {t.classes.map((c) => (
                        <span
                          key={c}
                          className="px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>

                  <td>{t.phone}</td>
                  <td className="max-w-xs truncate">{t.address}</td>

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

        {/* PAGINATION */}
        <div className="flex items-center justify-between px-6 py-4 text-sm text-gray-500 border-t">
          <span>Showing 1–10 of 50</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 rounded bg-gray-100">Prev</button>
            <span className="px-3 py-1 rounded bg-indigo-100 text-indigo-600">1</span>
            <span>2</span>
            <span>3</span>
            <span>…</span>
            <span>5</span>
            <button className="px-3 py-1 rounded bg-gray-100">Next</button>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW ================= */}
      <div className="md:hidden space-y-4">
        {teachers.map((t) => (
          <div key={t.id} className="bg-white p-4 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <NextImage
                src={t.avatar}
                alt={t.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-medium">{t.name}</p>
                <p className="text-xs text-gray-400">{t.email}</p>
              </div>
            </div>

            <p className="text-sm">
              <b>Subjects:</b> {t.subjects.join(", ")}
            </p>
            <p className="text-sm">
              <b>Classes:</b> {t.classes.join(", ")}
            </p>
            <p className="text-sm">
              <b>Phone:</b> {t.phone}
            </p>

            <div className="flex gap-2 mt-3">
              <button className="flex-1 py-2 bg-indigo-100 rounded text-indigo-600">
                View
              </button>
              <button className="flex-1 py-2 bg-red-100 rounded text-red-600">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
