import { Card, CardContent, CardHeader } from "@/app/_components/ui/card";
import { CircleMinus } from "lucide-react";
import { ReactNode } from "react";

interface SummaryCardProps {
  icon: ReactNode;
  title: string;
  size?: "small" | "large";
  userId?: string;
}

const SummaryCardSalary = ({
  icon,
  title,
  size = "small",
  userId,
}: SummaryCardProps) => {
  return (
    <Card>
      <CardHeader className="flex-row items-center gap-4">
        {icon}
        <p
          className={`${size === "small" ? "text-muted-foreground" : "text-white opacity-70"}`}
        >
          {title}
          {userId}
        </p>
      </CardHeader>
      <CardContent className="flex justify-between">
        <p className={"y-2 text-base"}>Salário</p>
        <p className="flex gap-2">
          <p className={"small"}>1000</p>
          <p>
            <CircleMinus />
          </p>
        </p>
      </CardContent>
      <CardContent className="flex justify-between">
        <p className={"y-4 text-base"}>FCT</p>
        <p className="flex gap-2">
          <p className={"small"}>10000</p>
          <p>
            <CircleMinus />
          </p>
        </p>
      </CardContent>
      <CardContent className="flex justify-between">
        <p className={"y-4 text-base"}>13°</p>
        <p className="flex gap-2">
          <p className={"small"}>100000</p>
          <p>
            <CircleMinus />
          </p>
        </p>
      </CardContent>
      <CardContent></CardContent>
    </Card>
  );
};

export default SummaryCardSalary;
