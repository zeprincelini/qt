import { useState, useEffect } from "react";

export const useFetch = (action: () => Promise<any>) => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const runAction = async () => {
      try {
        setIsLoading(true);
        const res = await action();
        setData(res);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "Something went wrong"
        );
      } finally {
        setIsLoading(false);
      }
    };

    runAction();
  }, []);

  return { isLoading, error, data };
};
