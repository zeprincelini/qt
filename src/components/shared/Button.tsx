"use client";
import { ReactElement, ComponentProps } from "react";
import Loader from "../svg/Loader";

type Variants = "primary" | "secondary" | "danger";

type Props = {
  bold?: boolean;
  width?: string;
  padding?: string;
  loading?: boolean;
  disabled?: boolean;
  variant?: Variants;
} & ComponentProps<"button">;

const Button = ({
  width = "w-auto",
  variant = "primary",
  children,
  className,
  disabled,
  padding = "py-3 px-5",
  bold = false,
  loading,
  ...rest
}: Props): ReactElement => {
  const selectVariant = (type: Variants) => {
    const options = {
      primary: "bg-blue-500 text-white border-blue-500",
      secondary: "bg-transparent text-blue-500 border-blue-500",
      danger: "bg-red-500 text-white border-red-500",
    };

    return options[type];
  };
  return (
    <button
      disabled={loading || disabled}
      className={`grid place-items-center rounded-md border-[1px] ${padding} disabled:opacity-75 disabled:cursor-not-allowed disabled:pointer-events-none ${
        bold ? `font-bold` : `font-normal`
      } ${width} ${selectVariant(variant)} ${className} }`}
      {...rest}
    >
      {loading ? <Loader width={"20px"} height={"20px"} /> : <p>{children}</p>}
    </button>
  );
};

export default Button;
