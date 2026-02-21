"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { Search, Eye, Pencil, Trash2, Plus } from "lucide-react";

/* -------------------- STUDENT DATA -------------------- */

const students = [
  {
    name: "Evan Ward",
    id: "S293847",
    grade: "2",
    phone: "987-654-321",
    address: "456 Oak Ave, Maplewood",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=11",
    gender: "boy",
  },
  {
    name: "Elena Thompson",
    id: "S817364",
    grade: "5",
    phone: "839-483-223",
    address: "468 Fir Ave, Meadowbrook",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=12",
    gender: "girl",
  },
  {
    name: "Sophia Green",
    id: "S347891",
    grade: "3",
    phone: "555-234-111",
    address: "12 Sunset Blvd, Riverdale",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=21",
    gender: "girl",
  },
  {
    name: "Liam Johnson",
    id: "S882311",
    grade: "4",
    phone: "555-555-222",
    address: "22 Oak Street, Midtown",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=22",
    gender: "boy",
  },
  {
    name: "Noah Williams",
    id: "S993421",
    grade: "2",
    phone: "555-333-999",
    address: "88 River Road, Brooklyn",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=23",
    gender: "boy",
  },
  {
    name: "Olivia Brown",
    id: "S543219",
    grade: "3",
    phone: "555-666-888",
    address: "101 Forest Lane, Hillview",
    class: "LKG-A",
    avatar: "https://i.pravatar.cc/100?img=24",
    gender: "girl",
  },
  {
    name: "James Miller",
    id: "S761245",
    grade: "4",
    phone: "555-999-222",
    address: "77 Pine Street, Uptown",
    class: "STD-1",
    avatar: "https://i.pravatar.cc/100?img=25",
    gender: "boy",
  },
];

/* -------------------- COMPONENT -------------------- */

export default function ClassStudentsPage() {
  const params = useParams();
  const className = params.class as string;

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;

  /* -------- Filter Students -------- */
  const filtered = students
    .filter((s) => s.class === className)
    .filter((s) =>
      s.name.toLowerCase().includes(search.toLowerCase())
    );

  /* -------- Stats -------- */
  const boys = filtered.filter((s) => s.gender === "boy").length;
  const girls = filtered.filter((s) => s.gender === "girl").length;

  /* -------- Pagination -------- */
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-8">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
        <div>
          <p className="text-sm text-gray-400 mb-1">
            Students / {className.replace("-", " ")}
          </p>
          <h1 className="text-2xl font-semibold text-gray-800">
            {className.replace("-", " ")} Class
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search students..."
              className="pl-10 pr-4 py-2 rounded-full bg-white border border-gray-200 text-sm w-64 focus:ring-2 focus:ring-indigo-200 outline-none"
            />
          </div>

          <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 transition">
            <Plus size={16} /> Add Student
          </button>
        </div>
      </div>

      {/* STATS CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        <StatCard label="Total Students" value={filtered.length} />
        <StatCard label="Boys" value={boys} />
        <StatCard label="Girls" value={girls} />
        <StatCard label="Pages" value={totalPages} />
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wide">
            <tr>
              <th className="px-6 py-4 text-left">Info</th>
              <th>ID</th>
              <th>Grade</th>
              <th>Phone</th>
              <th>Address</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {paginated.map((s) => (
              <tr
                key={s.id}
                className="border-t hover:bg-indigo-50/40 transition-all duration-200"
              >
                <td className="px-6 py-4 flex items-center gap-3">
                  <Image
                    src={s.avatar}
                    alt={s.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <span className="font-medium text-gray-800">
                    {s.name}
                  </span>
                </td>

                <td>{s.id}</td>
                <td>{s.grade}</td>
                <td>{s.phone}</td>
                <td className="truncate max-w-xs">
                  {s.address}
                </td>

                <td>
                  <div className="flex justify-center gap-2">
                    <ActionBtn color="blue">
                      <Eye size={15} />
                    </ActionBtn>
                    <ActionBtn color="indigo">
                      <Pencil size={15} />
                    </ActionBtn>
                    <ActionBtn color="red">
                      <Trash2 size={15} />
                    </ActionBtn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="p-8 text-center text-gray-400">
            No students found
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {filtered.length > 0 && (
        <div className="flex justify-between items-center mt-6 text-sm">
          <span className="text-gray-500">
            Showing {paginated.length} of {filtered.length}
          </span>

          <div className="flex items-center gap-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-40"
            >
              Prev
            </button>

            <span className="w-8 h-8 flex items-center justify-center rounded-lg bg-indigo-600 text-white">
              {currentPage}
            </span>

            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="px-3 py-1 rounded-lg border bg-white hover:bg-gray-100 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* -------------------- SMALL COMPONENTS -------------------- */

function StatCard({ label, value }: any) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-400">{label}</p>
      <h3 className="text-2xl font-semibold text-gray-800 mt-1">
        {value}
      </h3>
    </div>
  );
}

function ActionBtn({ children, color }: any) {
  const styles: any = {
    blue: "bg-blue-100 text-blue-600",
    indigo: "bg-indigo-100 text-indigo-600",
    red: "bg-red-100 text-red-600",
  };

  return (
    <button
      className={`w-9 h-9 rounded-full flex items-center justify-center ${styles[color]} hover:scale-110 transition`}
    >
      {children}
    </button>
  );
}