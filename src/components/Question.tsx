"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Questions } from "../types";

type Prop = {
  data: Questions;
};

const Question = ({ data }: Prop) => {
  const router = useRouter();
  const onSelect = (data: Questions) => {
    localStorage.setItem("question", JSON.stringify(data));
    router.push(`/questions/${data.id}`);
  };
  return (
    <div className="p-5 border border-gray-200 rounded relative">
      <div
        className="absolute cursor-pointer right-[10px]"
        onClick={() => onSelect(data)}
      >
        <p className="underline text-green-500">View</p>
      </div>
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
    </div>
  );
};

export default Question;
