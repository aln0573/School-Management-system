"use client";

import { useState } from "react";
import AddSchoolModal from "./components/AddSchoolModal";
import SchoolsHeader from "./components/SchoolsHeader";
import SchoolsStats from "./components/SchoolsStats";
import SchoolsTable from "./components/SchoolsTable";
import SchoolsMobileCards from "./components/SchoolsMobileCards";

const schools = [
  {
    id: "1",
    name: "Green Valley Public School",
    email: "demo@gmail.com",
    location: "Kozhikode",
    status: "Active" as "Active" | "Inactive", // Ensure status is one of the allowed types,
    phone: "9512346780",
  },
];

export default function SchoolsPage() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-4 sm:p-6 space-y-6">
      {/* Header */}
      <SchoolsHeader onAddSchool={() => setOpenAddModal(true)} />

      {/* Stats */}
      <SchoolsStats />

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block">
        <SchoolsTable schools={schools} />
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden">
        <SchoolsMobileCards schools={schools} />
      </div>

      {/* Modal */}
      <AddSchoolModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
    </div>
  );
}
