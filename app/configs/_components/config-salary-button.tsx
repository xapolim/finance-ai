"use client";

import { Button } from "@/app/_components/ui/button";
import UpsertSalaryDialog from "@/app/configs/_components/upsert-salary-dialog";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface ConfigSalaryButtonProps {
  userId: string;
}
const ConfigSalaryButton = ({ userId }: ConfigSalaryButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="default"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
        Configurar Salário
      </Button>
      <UpsertSalaryDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        userId={userId}
      />
    </>
  );
};

export default ConfigSalaryButton;
