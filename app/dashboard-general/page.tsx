import Navbar from "../_components/navbar";
import TimeSelect from "./_components/time-select";
import LastTransactions from "./_components/last-transactions";
import { canUserAddTransaction } from "../_data/can-user-add-transaction";
import { getDashboardGeral } from "../_data/get-dashboard-geral";
import SummaryCardsGeral from "./_components/summary-cards-geral";

const Dashboard = async () => {
  const dashboard = await getDashboardGeral();
  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <>
      <Navbar />
      <div className="flex h-full flex-col space-y-4 overflow-hidden p-6">
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <TimeSelect />
          </div>
        </div>
        <div className="grid h-full grid-cols-[2fr,1fr] gap-6 overflow-hidden">
          <SummaryCardsGeral
            {...dashboard}
            userCanAddTransaction={userCanAddTransaction}
          />
          <div className="flex flex-col gap-6 overflow-hidden">
            <div className="grid h-full grid-cols-3 grid-rows-1 gap-6 overflow-hidden">
              {/*<TransactionsPieChart {...dashboard} />
              <ExpensesPerCategory
                expensesPerCategory={dashboard.totalExpensePerCategory}
              />*/}
            </div>
          </div>
          <LastTransactions lastTransactions={dashboard.lastTransactions} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
