import { z } from "zod";

export const deleteItemSalarySchema = z.object({
  itemSalary: z.string().uuid(),
});

export type DeleteTransactionSchema = z.infer<typeof deleteItemSalarySchema>;
