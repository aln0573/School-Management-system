import { Search, Plus } from "lucide-react";

type Props = {
  onAddSchool: () => void;
};

export default function SchoolsHeader({ onAddSchool }: Props) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
      <h2 className="text-xl font-semibold text-gray-800">
       Manage All Registerd Schools
      </h2>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            placeholder="Search schools..."
            className="pl-9 pr-4 py-2 rounded-full bg-white border text-sm outline-none w-full sm:w-64"
          />
        </div>

        <button
          onClick={onAddSchool}
          className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow"
        >
          <Plus size={16} />
          Add School
        </button>
      </div>
    </div>
  );
}
