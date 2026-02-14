"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Search, Bell, MoreHorizontal } from "lucide-react";
import NextImage from "next/image";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

/* ---------------- DATA ---------------- */
const stats = [
  { title: "Students", value: "1,218", bg: "bg-[#DAD7FE]" },
  { title: "Teachers", value: "124", bg: "bg-[#FDE68A]" },
  { title: "Parents", value: "960", bg: "bg-[#DAD7FE]" },
  { title: "Staffs", value: "30", bg: "bg-[#FDE68A]" },
];

const genderData = [
  { name: "Boys", value: 1234, color: "#93C5FD" },
  { name: "Girls", value: 1134, color: "#FDE68A" },
];

const attendanceData = [
  { day: "Mon", present: 60, absent: 50 },
  { day: "Tue", present: 72, absent: 62 },
  { day: "Wed", present: 88, absent: 74 },
  { day: "Thu", present: 68, absent: 72 },
  { day: "Fri", present: 60, absent: 55 },
];

const financeData = [
  { month: "Jan", income: 2400, expense: 1900 },
  { month: "Feb", income: 2700, expense: 2100 },
  { month: "Mar", income: 2300, expense: 1700 },
  { month: "Apr", income: 3100, expense: 2500 },
  { month: "May", income: 2800, expense: 2000 },
];

const events = [
  {
    title: "Summer Camp Trip",
    time: "10:00 AM - 2:00 PM",
    desc: "Outdoor activities and games for all students",
  },
  {
    title: "Music Concert",
    time: "12:00 PM - 3:00 PM",
    desc: "Classic music concert for students & teachers",
  },
  {
    title: "Science Fair",
    time: "2:00 PM - 4:00 PM",
    desc: "Traditional science exhibition for students",
  },
];

const announcements = [
  {
    title: "About 4A Math Test",
    date: "2025-01-02",
    desc: "Math test scheduled for 2nd January has been cancelled.",
  },
  {
    title: "Field Trip Rescheduled",
    date: "2025-01-04",
    desc: "The field trip to London has been postponed.",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function AdminDashboardHome() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-[#F6F7FB] min-h-screen p-6">
      {/* TOP BAR */}
      <div className="flex items-center justify-between bg-white px-6 py-4 rounded-xl shadow-sm mb-6">
        <div className="flex items-center gap-3 w-1/2">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full text-sm outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-4">
          <Bell className="w-5 h-5 text-gray-500" />
          <div className="flex items-center gap-2">
            <NextImage
              src="https://i.pravatar.cc/40"
              alt="User Avatar"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full"
            />
            <div className="text-sm">
              <p className="font-medium">John Doe</p>
              <p className="text-xs text-gray-400">Admin</p>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
        {stats.map((item) => (
          <div
            key={item.title}
            className={`${item.bg} rounded-2xl px-6 py-5 shadow-sm`}
          >
            <p className="text-xs text-gray-500">{year}</p>
            <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
            <p className="text-sm text-gray-700 mt-1">{item.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* LEFT CONTENT */}
        <div className="xl:col-span-3 space-y-6">
          {/* STUDENTS + ATTENDANCE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Students */}
            <Card className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Students</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <PieChart>
                    <Pie
                      data={genderData}
                      dataKey="value"
                      innerRadius={60}
                      outerRadius={90}
                    >
                      {genderData.map((item, index) => (
                        <Cell key={index} fill={item.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>

                <div className="flex justify-around mt-4 text-sm">
                  {genderData.map((g) => (
                    <div key={g.name} className="text-center">
                      <p className="font-semibold">{g.value}</p>
                      <p className="text-gray-500">{g.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Attendance */}
            <Card className="lg:col-span-2 rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <div className="flex justify-between mb-4">
                  <h3 className="font-semibold">Attendance</h3>
                  <MoreHorizontal className="w-4 h-4 text-gray-400" />
                </div>

                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={attendanceData} barGap={8}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip />
                    <Bar dataKey="present" fill="#FACC15" radius={[8, 8, 0, 0]} />
                    <Bar dataKey="absent" fill="#93C5FD" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* FINANCE */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <div className="flex justify-between mb-4">
                <h3 className="font-semibold">Finance</h3>
                <MoreHorizontal className="w-4 h-4 text-gray-400" />
              </div>

              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={financeData}>
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="income"
                    stroke="#6366F1"
                    strokeWidth={2.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="expense"
                    stroke="#A5B4FC"
                    strokeWidth={2.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">
          {/* DEMO CALENDAR */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">August 2025</h3>

              <div className="grid grid-cols-7 text-xs text-center text-gray-500 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2 text-center text-sm">
                <div />
                <div />
                <div />

                {Array.from({ length: 31 }).map((_, i) => (
                  <div
                    key={i}
                    className={`py-2 rounded-lg ${
                      i === 14
                        ? "bg-[#C7D2FE] font-semibold"
                        : "bg-gray-100"
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Events */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Events</h3>
              <div className="space-y-4">
                {events.map((e) => (
                  <div key={e.title}>
                    <p className="font-medium">{e.title}</p>
                    <p className="text-xs text-gray-400">{e.time}</p>
                    <p className="text-sm text-gray-600">{e.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Announcements */}
          <Card className="rounded-2xl shadow-sm">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Announcements</h3>
              <div className="space-y-4">
                {announcements.map((a) => (
                  <div key={a.title}>
                    <div className="flex justify-between">
                      <p className="font-medium">{a.title}</p>
                      <span className="text-xs text-gray-400">{a.date}</span>
                    </div>
                    <p className="text-sm text-gray-600">{a.desc}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
