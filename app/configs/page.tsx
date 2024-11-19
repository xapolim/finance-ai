import { auth } from "@clerk/nextjs/server";
import Navbar from "../_components/navbar";
import ConfigSalaryButton from "./_components/config-salary-button";
import { redirect } from "next/navigation";
import { db } from "../_lib/prisma";

const ConfigPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }
  const salaryItens = await db.salaryTable.findMany({});
  return (
    <>
      <Navbar />
      <div className="space-y-2 p-6">
        <h1 className="text-2xl font-bold">Configurar Salário</h1>
        <p className="m-32">
          {" "}
          <ConfigSalaryButton
            salaryItens={JSON.parse(JSON.stringify(salaryItens))}
          />
        </p>
        {/**<AddTransactionButton /> */}
        <div className="flex gap-6"></div>
      </div>
    </>
  );
};

export default ConfigPage;
