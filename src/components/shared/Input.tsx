"use client";
import { ReactElement, ComponentProps } from "react";

type Props = {
  label?: string;
  width?: string;
  height?: string;
  labelColour?: string;
} & ComponentProps<"input">;

const Input = ({
  id,
  label,
  type = "text",
  width = "100%",
  height = "auto",
  labelColour = "gray",
  ...rest
}: Props): ReactElement => {
  return (
    <div className="relative" style={{ width, height }}>
      {label && (
        <label
          htmlFor={id}
          className={`text-[12px]`}
          style={{ color: labelColour }}
        >
          {label}
        </label>
      )}
      <input
        {...rest}
        {...{ id }}
        {...{ type }}
        className="outline-0 border-[1px] border-gray-300 rounded-md py-[10px] px-4 focus:border-blue-500 text-gray-700 w-full max-h-full"
      />
    </div>
  );
};

export default Input;
