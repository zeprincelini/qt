import { SVGProps } from "react";

type Props = {
  width?: string;
  height?: string;
  color?: string;
} & SVGProps<SVGElement>;

const Loader = ({
  width = "200px",
  height = "200px",
  color = "#ffffff",
  style = {
    margin: "auto",
    background: "none",
    display: "block",
    shapeRendering: "auto",
  },
  ...rest
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...{ style }}
      {...{ width }}
      {...{ height }}
      {...{ rest }}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        fill="none"
        stroke={color}
        stroke-width="10"
        r="35"
        stroke-dasharray="164.93361431346415 56.97787143782138"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="1s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        ></animateTransform>
      </circle>
    </svg>
  );
};

export default Loader;
