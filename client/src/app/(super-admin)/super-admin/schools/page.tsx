"use client";

import { useState } from "react";
import SchoolsHeader from "./components/SchoolsHeader";
import SchoolsTable, { School } from "./components/SchoolsTable";
import SchoolModal from "./components/AddSchoolModal";

export default function SchoolsPage() {
  const [schools, setSchools] = useState<School[]>([
    {
      id: "1",
      name: "Green Valley Public School",
      email: "demo@gmail.com",
      location: "Kozhikode",
      phone: "9512346780",
      status: "Active",
    },
    {
      id: "2",
      name: "Sunrise International School",
      email: "sunrise@gmail.com",
      location: "Calicut",
      phone: "9876543210",
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [selectedSchool, setSelectedSchool] =
    useState<School | null>(null);

  /* ---------- FILTER ---------- */
  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  /* ---------- ADD ---------- */
  const handleAdd = () => {
    setSelectedSchool(null); // important
    setOpenModal(true);
  };

  /* ---------- EDIT ---------- */
  const handleEdit = (school: School) => {
    setSelectedSchool(school);
    setOpenModal(true);
  };

  /* ---------- SAVE ---------- */
  const handleSave = (school: School) => {
    setSchools((prev) => {
      const exists = prev.find((s) => s.id === school.id);
      if (exists) {
        return prev.map((s) =>
          s.id === school.id ? school : s
        );
      }
      return [...prev, school];
    });
  };

  /* ---------- DELETE ---------- */
  const handleDelete = (id: string) => {
    setSchools((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-6 space-y-6">
      {/* HEADER */}
      <SchoolsHeader
        onAddSchool={handleAdd}
        onSearch={setSearch}
      />

      {/* TABLE */}
      <SchoolsTable
        schools={filteredSchools}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* MODAL */}
      <SchoolModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        school={selectedSchool}
        onSave={handleSave}
      />
    </div>
  );
}