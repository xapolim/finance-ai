import { Button } from "@/app/_components/ui/button";
import { ListPlus } from "lucide-react";
import { InsertItemSalary } from "../_actions/insert-item";
import { toast } from "sonner";

interface InsertItemSalaryButtonProps {
  userId: string;
  salaryItem: string;
  SalaryItemValue: number; // Updated to camelCase
  tipo: string;
  onSuccess: () => void;
}

const InsertItemSalaryButton = ({
  userId,
  salaryItem,
  SalaryItemValue,
  tipo,
  onSuccess,
}: InsertItemSalaryButtonProps) => {
  const handleClick = async () => {
    try {
      if (salaryItem.trim() === "") {
        throw new Error("Nome não pode ser vazio");
      }
      if (SalaryItemValue === 0) {
        throw new Error("Valor do item não pode ser 0");
      }
      if (tipo == "") {
        throw new Error("Escolha um tipo (Rendimento | Despesa)");
      }
      if (tipo === "despesa") SalaryItemValue *= -1;
      await InsertItemSalary({ userId, salaryItem, SalaryItemValue });
      if (onSuccess) onSuccess();
      toast.success("Updated!");
    } catch (err) {
      toast.error(err.message);
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
