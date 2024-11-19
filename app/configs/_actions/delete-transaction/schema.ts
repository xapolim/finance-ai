import { z } from "zod";

export const deleteItemSalarySchema = z.object({
  id: z.string().uuid(),
});

export type DeleteItemSalarySchema = z.infer<typeof deleteItemSalarySchema>;
