import React, { SVGProps } from "react";

type Props = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const MinusIcon = ({ size = "20px", ...rest }: Props) => {
  return (
    <svg
      height={size}
      viewBox="0 0 512 512"
      width={size}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0"
        fill="#007acc"
        id="id_101"
      ></path>
      <path
        d="m368 277.332031h-224c-11.777344 0-21.332031-9.554687-21.332031-21.332031s9.554687-21.332031 21.332031-21.332031h224c11.777344 0 21.332031 9.554687 21.332031 21.332031s-9.554687 21.332031-21.332031 21.332031zm0 0"
        fill="#fafafa"
        id="id_102"
      ></path>
    </svg>
  );
};

export default MinusIcon;
