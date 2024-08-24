import { API_URL } from "@/config/env";

export const fetcher = (url: string) => fetch(API_URL + url).then((res) => res.json());

export const fetcherPost = (url: string, data: any) => fetch(API_URL + url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
}).then((res) => res.json());

export const fetcherDelete = (url: string) => fetch(API_URL + url, {
  method: "DELETE",
}).then((res) => res.json());