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

interface UpsertSalaryDialogProps {
  isOpen: boolean;
  defaultValues?: FormSchema;
  transactionId?: string;
  setIsOpen: (isOpen: boolean) => void;
  salaryItens?: JSON;
}

const formSchema = z.object({
  name: z.string().trim().min(1, {
    message: "O nome é obrigatório.",
  }),
  amount: z
    .number({
      required_error: "O valor é obrigatório.",
    })
    .positive({
      message: "O valor deve ser positivo.",
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
            (Holerite){JSON.parse(JSON.stringify(salaryItens))[0]["userId"]}
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
            <div className="relative flex items-center justify-end">
              <div className="... relative inset-y-0 right-0 flex">
                <p className="flex gap-2">
                  <InsertItemSalaryButton
                    userId={
                      JSON.parse(JSON.stringify(salaryItens))[0]["userId"]
                    }
                    salaryItem={form.watch("name")}
                    SalaryItemValue={form.watch("amount")}
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
