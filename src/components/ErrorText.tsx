import React from "react";

const ErrorText = ({ error }: { error: string }) => {
  return <p className="text-red-400 text-center text-sm">{error}</p>;
};

export default ErrorText;
