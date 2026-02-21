"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface School {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  status: "Active" | "Inactive";
}

interface Props {
  open: boolean;
  onClose: () => void;
  school?: School | null;
  onSave: (school: School) => void;
}

export default function SchoolModal({
  open,
  onClose,
  school,
  onSave,
}: Props) {
  const [form, setForm] = useState<School>({
    id: "",
    name: "",
    email: "",
    location: "",
    phone: "",
    status: "Active",
  });

  useEffect(() => {
    if (school) {
      setForm(school);
    } else {
      setForm({
        id: crypto.randomUUID(),
        name: "",
        email: "",
        location: "",
        phone: "",
        status: "Active",
      });
    }
  }, [school]);

  const handleChange = (field: keyof School, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(form);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg rounded-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            {school ? "Edit School" : "Add School"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5 mt-4">
          <div>
            <Label>School Name</Label>
            <Input
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Admin Email</Label>
            <Input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Location</Label>
            <Input
              value={form.location}
              onChange={(e) => handleChange("location", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Phone</Label>
            <Input
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className="mt-1"
            />
          </div>

          <div>
            <Label>Status</Label>
            <Select
              value={form.status}
              onValueChange={(value) =>
                handleChange("status", value as any)
              }
            >
              <SelectTrigger className="mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              {school ? "Update School" : "Add School"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}