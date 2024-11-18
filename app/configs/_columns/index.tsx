"use client";

import { SalaryTable } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";

export const SalaryItensColumns: ColumnDef<SalaryTable>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },

  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: SalaryTable } }) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(SalaryTable.SalaryItemValue)),
  },
];
{
  /*{
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original: transaction } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton transaction={transaction} />
          <DeleteTransactionButton transactionId={transaction.id} />
        </div>
      );
    },
  }, */
}
