"use client";

import { useState } from "react";
import AddSchoolModal from "./components/AddSchoolModal";
import SchoolsHeader from "./components/SchoolsHeader";
import SchoolsStats from "./components/SchoolsStats";
import SchoolsTable from "./components/SchoolsTable";

export default function SchoolsPage() {
  const [openAddModal, setOpenAddModal] = useState(false);

  return (
    <div className="space-y-6">
      <SchoolsHeader onAddSchool={() => setOpenAddModal(true)} />

      <SchoolsStats />

      <SchoolsTable />

      <AddSchoolModal
        open={openAddModal}
        onClose={() => setOpenAddModal(false)}
      />
    </div>
  );
}
