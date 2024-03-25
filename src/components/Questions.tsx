"use client";
import React from "react";
import Question from "./Question";
import Loader from "./svg/Loader";
import { Questions } from "../types";
import { useFetch } from "../hooks/useFetch";
import { getQuestions } from "../server/api";

const Questions = () => {
  const { isLoading, data } = useFetch<Questions[]>(getQuestions);
  return (
    <>
      {isLoading ? (
        <div className="flex justify-center my-4">
          <Loader color="#007ACC" width="50px" height="50px" />
        </div>
      ) : data?.length ? (
        data?.map((item, i) => <Question data={item} key={i} />)
      ) : (
        <p className="text-gray-500 text-sm">No questions!</p>
      )}
    </>
  );
};

export default Questions;
