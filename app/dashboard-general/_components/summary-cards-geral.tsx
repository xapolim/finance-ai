import { WalletIcon } from "lucide-react";
import SummaryCardGeral from "./summary-card-geral";

interface SummaryCardsGeral {
  balanceGeral: number;
  depositsTotal: number;
  investmentsTotal: number;
  expensesTotal: number;
  userCanAddTransaction?: boolean;
}

const SummaryCardsGeral = async ({ balanceGeral }: SummaryCardsGeral) => {
  return (
    <div className="space-y-4">
      {/* PRIMEIRO CARD */}

      <SummaryCardGeral
        icon={<WalletIcon size={16} />}
        title="Geral"
        amount={balanceGeral}
        size="small"
      />
      <SummaryCardGeral
        icon={<WalletIcon size={16} />}
        title="Conta Investimento"
        amount={balanceGeral}
        size="small"
      />
    </div>
  );
};

export default SummaryCardsGeral;
