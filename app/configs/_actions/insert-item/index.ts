"use server";

import { db } from "@/app/_lib/prisma";
import { InsertItemSalarySchema } from "./schema";
import { revalidatePath } from "next/cache";

interface InsertItemSalaryParams {
  userId: string;
  salaryItem: string;
  SalaryItemValue: number;
}

export const InsertItemSalary = async (params: InsertItemSalaryParams) => {
  InsertItemSalarySchema.parse(params);

  await db.salaryTable.create({
    data: { ...params },
  });
  revalidatePath("/configs");
};
