import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";
const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/*ESQUERDA */}
      <div className="mx-auto flex h-full max-w-[500px] flex-col justify-center p-8">
        <Image
          src="/logo.svg"
          width={173}
          height={39}
          alt="finance ai"
          className="mb-8"
        />
        <h1 className="mb-3 text-4xl font-bold">Bem Vindo</h1>
        <p className="text-muted-foreground mb-8">Paragrafo de texto bobeira</p>
        <Button variant="outline">
          <LogInIcon className="mr-2" /> Fazer Login
        </Button>
      </div>
      {/* DIREITA*/}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
