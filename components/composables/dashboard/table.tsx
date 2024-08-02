import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

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

function TransactionRow(props: Transaction) {
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
      <TableCell className="font-medium">{props.name}</TableCell>
      <TableCell>
        <Badge variant="outline">{props.type}</Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">${props.amount}</TableCell>
      <TableCell className="hidden md:table-cell">
        ${props.amount}
      </TableCell>
      <TableCell className="hidden md:table-cell">{format(props.date, "yyyy-MM-dd")}</TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}
