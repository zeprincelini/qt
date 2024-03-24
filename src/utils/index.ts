import { cookies } from "next/headers";
import { Question } from "../types";

export const formatQuestion = (arg: Record<string, Question>) => {
  return Object.keys(arg).map((item) => ({
    id: item,
    question: arg[item].question,
    options: arg[item].options,
  }));
};

export const getToken = () => {
  const token = cookies().get("token");
  return token;
};
