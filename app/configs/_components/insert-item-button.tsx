import { Button } from "@/app/_components/ui/button";
import { ListPlus } from "lucide-react";
import { InsertItemSalary } from "../_actions/insert-item";
import { toast } from "sonner";

interface InsertItemSalaryButtonProps {
  userId: string;
  salaryItem: string;
  SalaryItemValue: number; // Updated to camelCase
  onSuccess: () => void;
}

const InsertItemSalaryButton = ({
  userId,
  salaryItem,
  SalaryItemValue,
  onSuccess,
}: InsertItemSalaryButtonProps) => {
  const handleClick = async () => {
    try {
      await InsertItemSalary({ userId, salaryItem, SalaryItemValue });
      if (onSuccess) onSuccess();
      toast.success("Updated!");
    } catch (error) {
      console.error(error);
      toast.error(`eitanois. ${userId}--${salaryItem}--${SalaryItemValue}`);
    }
  };
  return (
    <Button
      type="button"
      variant="outline"
      className="font-bold"
      size="default"
      onClick={handleClick}
    >
      Adicionar
      <ListPlus />
    </Button>
  );
};

export default InsertItemSalaryButton;
