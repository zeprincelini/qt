"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { http } from ".";
import { formatQuestion } from "../utils";
import { Questions, Token } from "../types";

export const getToken = () => {
  return cookies().get("token")?.value;
};

export const generateToken = async (email = "email@email.com") => {
  try {
    const res = await http("token", "POST", { email });

    if (!res.ok) {
      throw new Error("Error retrieving token!");
    }
    const data = (await res.json()) as Token;
    cookies().set("token", data.token);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};

export const getQuestions = async () => {
  try {
    const res = await http("questions", "GET", undefined, true);

    if (!res.ok) {
      throw new Error("Error retrieving questions!");
    }

    const data = await res.json();
    return formatQuestion(data);
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};

export const addQuestions = async (payload: Questions) => {
  try {
    const res = await http("questions", "POST", payload, true);

    if (!res.ok) {
      throw new Error("Error adding question!");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};

export const editQuestions = async (payload: Questions) => {
  try {
    const { id, ...rest } = payload;
    const res = await http(`questions/${id}`, "PUT", rest, true);

    if (!res.ok) {
      throw new Error("Error updating question!");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};

export const deleteQuestions = async (id: string) => {
  try {
    const res = await http(`questions/${id}`, "DELETE", undefined, true);

    if (!res.ok) {
      throw new Error("Error deleting question!");
    }

    revalidatePath("/");
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something went wrong!"
    );
  }
};
