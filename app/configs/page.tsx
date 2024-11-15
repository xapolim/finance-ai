"use client";
import Link from "next/link";
import Navbar from "../_components/navbar";
import { usePathname } from "next/navigation";
import AddTransactionButton from "../_components/config-salary";

const ConfigPage = () => {
  const pathname = usePathname();
  return (
    <>
      <Navbar />
      <div className="space-y-6 p-6">
        <h1 className="text-2xl font-bold">Configurar Salário</h1>

        <Link
          href="#"
          className={
            pathname === "/"
              ? "text-id font-bold text-primary"
              : "text-muted-foreground"
          }
        >
          Configurar Salário
        </Link>
        <AddTransactionButton />
        <div className="flex gap-6"></div>
      </div>
    </>
  );
};

export default ConfigPage;
