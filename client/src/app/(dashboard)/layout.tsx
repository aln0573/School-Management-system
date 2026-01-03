import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar Placeholder */}
      <aside className="w-64 bg-gray-800 text-white hidden md:block">
        <div className="p-4 font-bold text-xl">SMS Dashboard</div>
        <nav className="p-4 space-y-2">
            <div><Link href="/admin">Admin</Link></div>
            <div><Link href="/teacher">Teacher</Link></div>
            <div><Link href="/student">Student</Link></div>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar Placeholder */}
        <header className="h-16 bg-white shadow flex items-center px-6">
            <h2 className="text-lg font-semibold">Welcome</h2>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
