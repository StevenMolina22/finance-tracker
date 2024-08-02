import { type Transaction } from "@/types/transactions";
import { fetcher } from "@/utils/fetcher";
import { TransactionCard } from "./transactions-card";

async function TransactionsPage() {
  const transactions: Transaction[] = await fetcher("/transactions");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-16 gap-8">
      {transactions?.map((transaction) => (
        <TransactionCard key={transaction.id} transaction={transaction} />
      ))}
    </div>
  );
}

export default TransactionsPage;
