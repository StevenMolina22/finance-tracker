"use server"

import { fetcherDelete } from "@/utils/fetcher";

export const deleteTransaction = async (id: number) => {
  const res = await fetcherDelete(`/transactions/${id}`);
  return res;
}