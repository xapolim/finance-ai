import { z } from "zod";

export const InsertItemSalarySchema = z.object({
  userId: z.string().trim().min(1),
  salaryItem: z.string().trim().min(1),
  SalaryItemValue: z.number().positive(),
});
