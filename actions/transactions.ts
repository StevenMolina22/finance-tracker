"use server";
import { fetcherDelete, fetcherPost } from "@/utils/fetcher";
import { revalidatePath } from "next/cache";

// POST
export const postTransaction = async (data: FormData) => {
  "use server";
  console.log(data);

  const rawFormData = {
    user_id: 6,
    category_id: 1,
    name: data.get("name"),
    amount: parseFloat(data.get("amount") as string),
    date: new Date(data.get("date") as string),
    type: data.get("type"),
    description: { String: data.get("description"), Valid: true },
  };

  const res = await fetcherPost("/transactions", rawFormData);

  revalidatePath("/transactions");
  console.log(res);
};

// DELETE
export const deleteTransaction = async (id: number) => {
  const res = await fetcherDelete(`/transactions/${id}`);

  revalidatePath("/transactions");
  return res;
};
