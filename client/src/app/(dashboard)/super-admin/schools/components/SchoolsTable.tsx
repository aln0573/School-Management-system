import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";

export default function SchoolsTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>School List</CardTitle>
      </CardHeader>

      <CardContent className="p-0">
        <table className="w-full text-sm">
          <thead className="border-b bg-muted/50">
            <tr>
              <th className="px-4 py-3 text-left">School Name</th>
              <th className="px-4 py-3 text-left">Admin Email</th>
              <th className="px-4 py-3 text-left">Location</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3">Green Valley Public School</td>
              <td className="px-4 py-3">demo@gmail.com</td>
              <td className="px-4 py-3">Kozhikode</td>
              <td className="px-4 py-3">9512346780</td>
              <td className="px-4 py-3">
                <span className="rounded-full bg-green-100 px-2 py-1 text-xs text-green-700">
                  Active
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {/* View */}
                  <Button
                    size="icon"
                    variant="ghost"
                    title="View School"
                  >
                    <Eye className="h-4 w-4" />
                  </Button>

                  {/* Edit */}
                  <Button
                    size="icon"
                    variant="ghost"
                    title="Edit School"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>

                  {/* Delete */}
                  <Button
                    size="icon"
                    variant="ghost"
                    className="text-destructive hover:text-destructive"
                    title="Delete School"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
