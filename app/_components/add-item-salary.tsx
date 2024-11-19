"use client";

import { ListPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

const AddItemSalary = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline" className="font-bold">
            Adicionar
            <ListPlus />
          </Button>
        </TooltipTrigger>
      </Tooltip>
    </TooltipProvider>
  );
};

export default AddItemSalary;
