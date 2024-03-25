"use client";
import React, { FormEvent, useState } from "react";
import { addQuestions } from "../../../../server/api";
import Input from "../../../../components/shared/Input";
import { useAction } from "../../../../hooks/useAction";
import ErrorText from "../../../../components/ErrorText";
import Button from "../../../../components/shared/Button";
import OptionInput from "../../../../components/OptionInput";

const AddQuestions = () => {
  const { isLoading, error, action } = useAction(addQuestions);
  const [data, setData] = useState<{
    question: string;
    options: { option: string; id: number }[];
  }>({ question: "", options: [] });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const { question, options } = data;
    const payload = {
      question,
      options: options.map((v) => v.option),
    };
    action(payload);
  };
  return (
    <form onSubmit={submit} className="w-full md:w-1/2 mx-auto grid gap-4">
      {error ? <ErrorText {...{ error }} /> : null}
      <Input
        label="Enter Question"
        onChange={(e) =>
          setData((prev) => ({ ...prev, question: e.target.value }))
        }
      />
      <OptionInput {...{ data }} {...{ setData }} />
      <Button
        loading={isLoading}
        disabled={
          isLoading || data.options.length < 3 || data.options.length > 5
        }
      >
        Submit
      </Button>
    </form>
  );
};

export default AddQuestions;
