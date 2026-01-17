interface School {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;  
}

interface SchoolsMobileCardsProps {
  schools: School[];
}

export default function SchoolsMobileCards({ schools }: SchoolsMobileCardsProps) {
  return (
    <div className="space-y-4">
      {schools.map((s) => (
        <div key={s.id} className="bg-white p-4 rounded-xl shadow-sm">
          <p className="font-medium">{s.name}</p>
          <p className="text-xs text-gray-400">{s.email}</p>

          <p className="text-sm mt-2">
            <b>Location:</b> {s.location}
          </p>

          <p className="text-sm">
            <b>Phone:</b> {s.phone}
          </p>

          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 bg-indigo-100 rounded text-indigo-600">
              View
            </button>
            <button className="flex-1 py-2 bg-red-100 rounded text-red-600">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
