"use client";

import { SalaryTable } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import DeleteTransactionButton from "../_components/delete-transaction-button";
import { CircleIcon } from "lucide-react";

export const SalaryItensColumns: ColumnDef<SalaryTable>[] = [
  {
    accessorKey: "salaryItem",
    header: "Resumo",
    cell: ({ row: { original: SalaryTable } }) => {
      const formatted = SalaryTable.salaryItem;
      if (Number(SalaryTable.SalaryItemValue) > 0) {
        return (
          <div className="flex">
            <CircleIcon className="mr-2 fill-primary" size={10} />
            {formatted}
          </div>
        );
      } else {
        return (
          <div className="flex">
            <CircleIcon className="mr-2 fill-red-500" size={10} />
            {formatted}
          </div>
        );
      }
    },
  },

  {
    accessorKey: "amount",
    header: "",
    cell: ({ row: { original: SalaryTable } }) => {
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(SalaryTable.SalaryItemValue));

      return (
        <div className="flex items-center justify-end">
          <span className="font-medium">{formatted}</span>
          <DeleteTransactionButton id={SalaryTable.id} />
        </div>
      );
    },
  },
];
