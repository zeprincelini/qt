const { BASE_URL } = process.env;

export const http = (
  path: string,
  method: string,
  data?: unknown,
  token = false
) => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${localStorage.getItem("token")}` }),
  };
  const options: RequestInit = { headers, method };

  if (data) {
    options.body = JSON.stringify(data);
  }

  return fetch(`${BASE_URL}/${path}`, options);
};
