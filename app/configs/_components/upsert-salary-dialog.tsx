import { Button } from "../../_components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../_components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/ui/form";
import { Input } from "../../_components/ui/input";
import { MoneyInput } from "../../_components/money-input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { DataTable } from "@/app/_components/ui/salary-table";
import { SalaryItensColumns } from "./../_columns";
import InsertItemSalaryButton from "./insert-item-button";
import React, { useState } from "react";

interface UpsertSalaryDialogProps {
  isOpen: boolean;
  defaultValues?: FormSchema;
  transactionId?: string;
  setIsOpen: (isOpen: boolean) => void;
  salaryItens: number;
}

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),
  amount: z.number({
    required_error: "O valor é obrigatório.",
  }),
});

type FormSchema = z.infer<typeof formSchema>;

const UpsertSalaryDialog = ({
  isOpen,
  defaultValues,
  salaryItens,
  setIsOpen,
}: UpsertSalaryDialogProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      amount: 0,
      name: "",
    },
  });

  const bruto = salaryItens.reduce(
    (accumulator, currentValue) =>
      accumulator +
      (Number(currentValue.SalaryItemValue) > 0
        ? Number(currentValue.SalaryItemValue)
        : 0),
    0,
  );
  const desconto = salaryItens.reduce(
    (accumulator, currentValue) =>
      accumulator +
      (Number(currentValue.SalaryItemValue) < 0
        ? Number(currentValue.SalaryItemValue)
        : 0),
    0,
  );
  const liquido = salaryItens.reduce(
    (accumulator, currentValue) =>
      accumulator + Number(currentValue.SalaryItemValue),
    0,
  );
  console.log(bruto);
  console.log(desconto * -1);
  console.log(liquido);

  const [valorSelecionado, setValorSelecionado] = useState("");
  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setValorSelecionado(event.target.value);
  };
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open);
        if (!open) {
          form.reset();
        }
      }}
    >
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Configurar o Holerite</DialogTitle>
          <DialogDescription>
            Insira os itens abaixo conforme aparecem em seu contracheque
            (Holerite)---
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nomea</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o nome..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor</FormLabel>
                  <FormControl>
                    <MoneyInput
                      placeholder="Digite o valor..."
                      value={field.value}
                      onValueChange={({ floatValue }) =>
                        field.onChange(floatValue)
                      }
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div>
              <label className="p-4">
                <input
                  className="mr-2"
                  type="radio"
                  value="rendimento"
                  checked={valorSelecionado === "rendimento"}
                  onChange={handleChange}
                />
                Rendimento
              </label>
              <label className="p-4">
                <input
                  className="mr-2"
                  type="radio"
                  value="despesa"
                  checked={valorSelecionado === "despesa"}
                  onChange={handleChange}
                />
                Despesa
              </label>
            </div>
            <div className="relative flex items-center justify-end">
              <div className="... relative inset-y-0 right-0 flex">
                <p className="flex gap-2">
                  <InsertItemSalaryButton
                    userId={
                      JSON.parse(JSON.stringify(salaryItens))[0]["userId"]
                    }
                    salaryItem={form.watch("name")}
                    SalaryItemValue={form.watch("amount")}
                    tipo={valorSelecionado}
                    onSuccess={() => form.reset()}
                  />
                </p>
              </div>
            </div>
            <ScrollArea>
              <DataTable
                columns={SalaryItensColumns}
                data={JSON.parse(JSON.stringify(salaryItens))}
              />
            </ScrollArea>
            <div className="flex justify-between">
              <div className="text-green-400">
                Bruto <p>R$ {bruto.toFixed(2)}</p>
              </div>
              <div className="text-red-400">
                Desconto<p>R$ {(desconto * -1).toFixed(2)}</p>
              </div>
              <div className="text-blue-400">
                Liquido<p>R$ {liquido.toFixed(2)}</p>
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button">Fechar</Button>
              </DialogClose>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertSalaryDialog;
