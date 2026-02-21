"use client";

import { Search, Plus } from "lucide-react";

interface Props {
  onAddSchool: () => void;
  onSearch: (value: string) => void;
}

export default function SchoolsHeader({
  onAddSchool,
  onSearch,
}: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
      <h2 className="text-2xl font-semibold text-gray-800">
        Manage All Registered Schools
      </h2>

      <div className="flex gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search schools..."
            className="pl-9 pr-4 py-2 rounded-full bg-white border text-sm outline-none w-64"
          />
        </div>

        <button
          onClick={onAddSchool}
          className="flex items-center gap-2 px-5 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:bg-indigo-700 transition"
        >
          <Plus size={16} />
          Add School
        </button>
      </div>
    </div>
  );
}