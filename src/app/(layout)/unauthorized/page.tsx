"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAction } from "../../../hooks/useAction";
import ErrorText from "../../../components/ErrorText";
import Button from "../../../components/shared/Button";
import { generateToken, getToken } from "../../../server/api";

const Unauthorized = () => {
  const router = useRouter();
  const toHome = () => router.push("/");
  const { isLoading, error, action } = useAction(generateToken, toHome);

  useEffect(() => {
    const checkForToken = async () => {
      const token = await getToken();
      if (token) {
        return toHome();
      }
    };
    checkForToken();
  }, []);

  return (
    <div className="grid place-content-center min-h-[calc(100vh-150px)]">
      <div className="flex flex-col gap-2 text-center">
        <p className="text-sm text-gray-500">Token not found!</p>
        {error ? <ErrorText {...{ error }} /> : null}
        <div className="mx-auto">
          <Button
            loading={isLoading}
            disabled={isLoading}
            onClick={() => action()}
          >
            Generate Token
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
