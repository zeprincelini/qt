"use client";

import { redirect } from "next/navigation";
import { useAction } from "../../../hooks/useAction";
import Button from "../../../components/shared/Button";
import { generateToken, getToken } from "../../../server/api";
import { useEffect } from "react";

const Unauthorized = () => {
  const toHome = () => redirect("/");
  const { isLoading, error, action } = useAction(generateToken);

  useEffect(() => {
    if (getToken()) {
      return toHome();
    }
  }, []);

  return (
    <div className="grid place-content-center min-h-[calc(100vh-150px)]">
      <div className="flex flex-col gap-2 text-center">
        <p>Token not found!</p>
        {error ? (
          <p className="text-red-400 text-center text-sm">{error}</p>
        ) : null}
        <div className="mx-auto">
          <Button loading={isLoading} disabled={isLoading} onClick={action}>
            Generate Token
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
