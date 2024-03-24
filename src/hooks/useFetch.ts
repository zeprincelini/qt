import { useState, useEffect } from "react";

export const useFetch = <T>(action: () => Promise<T>) => {
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const runAction = async () => {
      try {
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
