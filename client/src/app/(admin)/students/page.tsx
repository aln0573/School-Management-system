"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const classData = [
  { name: "LKG A", count: 12 },
  { name: "LKG B", count: 10 },
  { name: "UKG A", count: 15 },
  { name: "UKG B", count: 8 },
  { name: "STD 1", count: 20 },
  { name: "STD 2", count: 18 },
  { name: "STD 3", count: 16 },
  { name: "STD 6", count: 9 },
];

export default function StudentsPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#F6F7FB] min-h-screen p-6"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        All Students
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {classData.map((cls) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={cls.name}
            onClick={() =>
              router.push(`/students/${cls.name.replace(" ", "-")}`)
            }
            className="cursor-pointer relative bg-gradient-to-br from-lime-400 to-lime-600 
                       h-36 rounded-2xl shadow-md flex items-center justify-center
                       text-white text-lg font-bold tracking-wide"
          >
            {cls.name}

            {/* Student Count Badge */}
            <span className="absolute top-3 right-3 bg-white text-lime-700 text-xs px-2 py-1 rounded-full font-semibold">
              {cls.count}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}