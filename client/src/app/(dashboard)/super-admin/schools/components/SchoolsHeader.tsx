import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Props = {
  onAddSchool: () => void;
};

export default function SchoolsHeader({ onAddSchool }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Schools</h1>
        <p className="text-muted-foreground">
          Manage all registered schools
        </p>
      </div>

      <Button className="gap-2" onClick={onAddSchool}>
        <Plus size={16} />
        Add School
      </Button>
    </div>
  );
}
