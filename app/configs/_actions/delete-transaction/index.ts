"use server";

import { db } from "@/app/_lib/prisma";
import { DeleteItemSalarySchema } from "./schema";
import { revalidatePath } from "next/cache";

export const deleteTransaction = async ({ id }: DeleteItemSalarySchema) => {
  await db.salaryTable.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/configs");
  revalidatePath("/");
};
