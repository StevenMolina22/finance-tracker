import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Transaction } from "@/types/transactions";
import { fetcher } from "@/utils/fetcher";
import { format } from "date-fns";
import Image from "next/image";
import { DeleteTransactionDialog } from "./delete-dialog";

export async function ItemsTable() {
  const transactions: Transaction[] = await fetcher("/transactions");
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="hidden w-[100px] sm:table-cell">
            <span className="sr-only">Image</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead className="hidden md:table-cell">Amount</TableHead>
          <TableHead className="hidden md:table-cell">Total Amount</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead>
            <span className="sr-only">Actions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions?.map((item) => (
          <TransactionRow key={item.id} {...item} />
        ))}
      </TableBody>
    </Table>
  );
}

function TransactionRow(transaction: Transaction) {
    return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover w-12 h-12"
          height="64"
          src="https://cdn-icons-png.freepik.com/512/8552/8552832.png"
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{transaction.name}</TableCell>
      <TableCell>
        <Badge variant="outline">{transaction.type}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">${transaction.amount}</TableCell>
      <TableCell className="hidden md:table-cell">
        ${transaction.amount}
      </TableCell>
      <TableCell className="hidden md:table-cell">{format(transaction.date, "yyyy-MM-dd")}</TableCell>
      <TableCell>
        {/* <ItemDropdown /> */}
        <DeleteTransactionDialog id={transaction.id}/>
      </TableCell>
    </TableRow>
  );
}
