"use server";

import { cookies } from "next/headers";

const { NEXT_PUBLIC_BASE_URL } = process.env;

export const http = (
  path: string,
  method: string,
  data?: unknown,
  token = false
) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { token: cookies().get("token")?.value }),
  };
  const options: RequestInit = { headers, method };

  if (data) {
    options.body = JSON.stringify(data);
  }
  return fetch(`${NEXT_PUBLIC_BASE_URL}/${path}`, options);
};
