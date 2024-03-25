"use client";
import { useRouter, useParams } from "next/navigation";
import React, { FormEvent, useEffect, useState } from "react";
import { Questions } from "../../../../types";
import Input from "../../../../components/shared/Input";
import { useAction } from "../../../../hooks/useAction";
import ErrorText from "../../../../components/ErrorText";
import Button from "../../../../components/shared/Button";
import OptionInput from "../../../../components/OptionInput";
import { deleteQuestions, editQuestions } from "../../../../server/api";

const QuestionPage = () => {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const current = localStorage.getItem("question");
  const [options, setOptions] = useState<Questions>();
  const [data, setData] = useState<{
    question: string;
    options: { option: string; id: number }[];
  }>({ question: "", options: [] });

  const { isLoading, error, action } = useAction(editQuestions, () =>
    router.push("/")
  );
  const {
    isLoading: loading,
    error: deleteError,
    action: deleteAction,
  } = useAction(deleteQuestions, () => router.push("/"));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const { question, options } = data;
    const payload = {
      id: params.id,
      question,
      options: options.map((v) => v.option),
    };

    action(payload);
  };

  const onDelete = (id: string) => deleteAction(id);

  useEffect(() => {
    if (current) {
      setOptions(JSON.parse(current));
    } else {
      router.push("/");
    }
  }, [current]);

  return (
    <div className="grid gap-4">
      <form onSubmit={submit} className="w-full md:w-1/2 mx-auto grid gap-4">
        {error ? <ErrorText {...{ error }} /> : null}
        <Input
          label="Enter Question"
          defaultValue={options?.question}
          onChange={(e) =>
            setData((prev) => ({ ...prev, question: e.target.value }))
          }
        />
        <OptionInput
          edit={true}
          current={options}
          {...{ data }}
          {...{ setData }}
        />
        <Button
          loading={isLoading}
          disabled={
            isLoading || data.options.length < 3 || data.options.length > 5
          }
        >
          Submit
        </Button>
      </form>
      <div className="grid gap-1">
        {error ? <ErrorText error={deleteError} /> : null}
        <div className="flex justify-center my-5">
          <Button
            variant="danger"
            padding="py-2"
            width="w-full md:w-1/3"
            onClick={() => onDelete(params.id)}
            loading={loading}
            disabled={loading}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
