import { useState } from "react";

export const useAction = (
  action: (args?: any) => Promise<any>,
  onFinish?: () => void
) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const runAction = async (args?: any) => {
    try {
      setIsLoading(true);
      const res = await action(args);
      setData(res);
      if (onFinish) onFinish();
    } catch (error) {
      setError(error instanceof Error ? error.message : "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, data, action: runAction };
};
