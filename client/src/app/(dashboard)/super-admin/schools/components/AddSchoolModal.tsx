"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddSchoolModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AddSchoolModal({ open, onClose }: AddSchoolModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add School</DialogTitle>
        </DialogHeader>

        {/* Form */}
        <form className="space-y-4">
          <div className="space-y-1">
            <Label>School Name</Label>
            <Input placeholder="Enter school name" />
          </div>

          <div className="space-y-1">
            <Label>Admin Email</Label>
            <Input type="email" placeholder="admin@school.com" />
          </div>

          <div className="space-y-1">
            <Label>Location</Label>
            <Input placeholder="City / District" />
          </div>

          <div className="space-y-1">
            <Label>Phone Number</Label>
            <Input placeholder="Enter phone number" />
          </div>

          <div className="space-y-1">
            <Label>Status</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Add School
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
