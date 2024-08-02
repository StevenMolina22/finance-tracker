import { postTransaction } from "@/actions/transactions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export function TransactionForm({ className }: { className?: string }) {
  return (
    <form action={postTransaction} className={cn(className)}>
      <Label htmlFor="name">Name</Label>
      <Input id="name" name="name" type="text" required />
      <div className="flex gap-2">
        <div className="w-[50%]">
          <Label htmlFor="amount">Amount</Label>
          <Input id="amount" name="amount" type="number" required />
        </div>
        <div className="w-[50%]">
          <Label htmlFor="type">Type</Label>
          <TypeSelect />
        </div>
      </div>
      <Label htmlFor="description">Description</Label>
      <Input id="description" name="description" type="text" />
      <Label htmlFor="date">Date</Label>
      <Input id="date" name="date" type="date" required />

      <Button type="submit" className="mt-4">
        Submit
      </Button>
    </form>
  );
}

export function TypeSelect() {
  return (
    <Select name="type" required>
      <SelectTrigger className="">
        <SelectValue placeholder="Select type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Type</SelectLabel>
          <SelectItem value="Expense">Expense</SelectItem>
          <SelectItem value="Income">Income</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
