"use client";

import { useEffect, useState } from "react";
import { School } from "./SchoolsTable";

interface Props {
  open: boolean;
  school: School | null;
  onClose: () => void;
  onSave: (school: School) => void;
}

export default function EditSchoolModal({
  open,
  school,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<School | null>(null);

  useEffect(() => {
    if (school) setForm(school);
  }, [school]);

  if (!open || !form) return null;

  const handleChange = (field: keyof School, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Edit School</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            value={form.location}
            onChange={(e) => handleChange("location", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />

          <input
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="w-full border rounded-lg px-3 py-2"
          />

          <select
            value={form.status}
            onChange={(e) =>
              handleChange("status", e.target.value)
            }
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}