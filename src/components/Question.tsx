"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Questions } from "../types";
import Button from "./shared/Button";
import ErrorText from "./ErrorText";
import { useAction } from "../hooks/useAction";
import { deleteQuestions } from "../server/api";

type Prop = {
  data: Questions;
};

const Question = ({ data }: Prop) => {
  const { isLoading, error, action } = useAction(deleteQuestions);
  const router = useRouter();
  const onSelect = (id: string) => router.push(`/questions/${id}`);
  const onDelete = (id: string) => action(id);
  return (
    <div
      className="cursor-pointer p-3 border border-gray-200 rounded"
      onClick={() => onSelect(data.id)}
    >
      <div className="grid gap-3">
        <div className="grid gap-1">
          <p className="font-light text-xs">Question</p>
          <p className="text-base text-gray-600">{data.question}</p>
        </div>
        <div>
          <p className="font-light text-xs">Options</p>
          <div className="px-2">
            {data.options.map((item) => (
              <p className="py-2 text-base text-gray-600">{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center my-5">
        {error ? <ErrorText {...{ error }} /> : null}
        <Button
          variant="danger"
          padding="py-2"
          width="w-full md:w-1/3"
          onClick={() => onDelete(data.id)}
          loading={isLoading}
          disabled={isLoading}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Question;
