import React, { SVGProps } from "react";

type Props = {
  size?: string;
} & SVGProps<SVGSVGElement>;

const AddIcon = ({ size = "20px", ...rest }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      {...rest}
      viewBox="0 0 20 20"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>add_circle</title>
      <desc>Created with Sketch.</desc>
      <g
        id="Icons"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="Rounded" transform="translate(-102.000000, -1484.000000)">
          <g id="Content" transform="translate(100.000000, 1428.000000)">
            <g
              id="-Round-/-Content-/-add_circle"
              transform="translate(0.000000, 54.000000)"
            >
              <g>
                <polygon id="Path" points="0 0 24 0 24 24 0 24"></polygon>
                <path
                  d="M12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 Z M16,13 L13,13 L13,16 C13,16.55 12.55,17 12,17 C11.45,17 11,16.55 11,16 L11,13 L8,13 C7.45,13 7,12.55 7,12 C7,11.45 7.45,11 8,11 L11,11 L11,8 C11,7.45 11.45,7 12,7 C12.55,7 13,7.45 13,8 L13,11 L16,11 C16.55,11 17,11.45 17,12 C17,12.55 16.55,13 16,13 Z"
                  id="🔹Icon-Color"
                  fill="#007acc"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default AddIcon;
