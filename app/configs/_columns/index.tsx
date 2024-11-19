"use client";

import { SalaryTable } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import DeleteTransactionButton from "../_components/delete-transaction-button";

export const SalaryItensColumns: ColumnDef<SalaryTable>[] = [
  {
    accessorKey: "salaryItem",
    header: "Resumo",
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
          <DeleteTransactionButton itemSalary={SalaryTable.id} />
        </div>
      );
    },
  },
];
