"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "./shared/Button";

const AddQuestionBtn = () => {
  const router = useRouter();
  return (
    <Button
      variant="secondary"
      padding="p-2"
      onClick={() => router.push("/questions/add")}
    >
      Add Question
    </Button>
  );
};

export default AddQuestionBtn;
