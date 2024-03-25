"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import Input from "./shared/Input";
import AddIcon from "./svg/AddIcon";
import MinusIcon from "./svg/MinusIcon";

type Props = {
  edit?: boolean;
  current?: { question: string; options: string[] };
  data: {
    question: string;
    options: { option: string; id: number }[];
  };
  setData: Dispatch<
    SetStateAction<{
      question: string;
      options: { option: string; id: number }[];
    }>
  >;
};

const OptionInput = ({ edit = false, current, data, setData }: Props) => {
  useEffect(() => {
    setData(
      current?.options?.length
        ? {
            question: current.question,
            options: current.options?.map((item, i) => ({
              id: i,
              option: item,
            })),
          }
        : { question: "", options: [{ id: 0, option: "" }] }
    );
  }, [current]);

  const onPush = (id: number) => {
    if (data.options.length < 5) {
      setData((prev) => ({
        ...prev,
        options: [...prev.options, { id, option: "" }],
      }));
    }
  };

  const onPop = (id: number) => {
    setData((prev) => ({
      ...prev,
      options: prev.options.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="grid gap-2">
      {data?.options?.map((item, i) => (
        <div key={item.id} className="flex items-center gap-2">
          <Input
            placeholder="Enter Option"
            {...(edit && { defaultValue: item.option })}
            onChange={(e) => {
              const newValue = e.target.value;
              setData((prev) => ({
                ...prev,
                options: prev.options.map((option, index) =>
                  index === i ? { ...option, option: newValue } : option
                ),
              }));
            }}
          />
          {data.options[i].id === data.options[data.options.length - 1].id ? (
            <AddIcon
              size="25px"
              className="cursor-pointer"
              onClick={() => onPush(i + 1)}
            />
          ) : (
            <MinusIcon
              size="25px"
              className="cursor-pointer"
              onClick={() => onPop(item.id)}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default OptionInput;
