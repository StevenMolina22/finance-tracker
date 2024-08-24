import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Transaction } from "@/types/transactions";

export function TransactionCard({ transaction }: { transaction: Transaction }) {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Transaction Details</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          <li>
            <strong>ID:</strong> {transaction.id}
          </li>
          <li>
            <strong>User ID:</strong> {transaction.user_id}
          </li>
          <li>
            <strong>Category ID:</strong> {transaction.category_id}
          </li>
          <li>
            <strong>Name:</strong> {transaction.name}
          </li>
          <li>
            <strong>Amount:</strong> ${transaction.amount}
          </li>
          <li>
            <strong>Description:</strong> {transaction.description.String}
          </li>
          <li>
            <strong>Type:</strong> {transaction.type}
          </li>
          <li>
            <strong>Date:</strong> {formatDate(transaction.date)}
          </li>
          <li>
            <strong>Created At:</strong> {formatDate(transaction.created_at)}
          </li>
          <li>
            <strong>Updated At:</strong> {formatDate(transaction.updated_at)}
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button>View more</Button>
      </CardFooter>
    </Card>
  );
}

const formatDate = (dateString: Date) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};