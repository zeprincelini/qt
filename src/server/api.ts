"use server";

import { revalidatePath } from "next/cache";
import { http } from ".";
import { Questions } from "../types";

export const getToken = async (email = "email@email.com") => {
  try {
    const res = await http("token", "POST", { email });

    if (!res.ok) {
      throw new Error("Error retrieving token!");
    }

    console.log(res.json());
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

    return res.json();
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

export const editQuestions = async (id: string, payload: Questions) => {
  try {
    const res = await http(`questions/${id}`, "PUT", payload, true);

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
    const res = await http(`questions/${id}`, "DELETE", true);

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
