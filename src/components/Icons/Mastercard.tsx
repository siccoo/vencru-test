import * as React from "react";
import { SVGProps } from "react";
const SvgMastercard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 46 32"
    width="1em"
    height="1em"
    {...props}
  >
    <rect width={45} height={31} x={0.5} y={0.5} fill="#fff" rx={5.5} />
    <path
      fill="#ED0006"
      fillRule="evenodd"
      d="M22.905 22.44a9.07 9.07 0 0 1-5.864 2.133c-4.993 0-9.041-4-9.041-8.933 0-4.934 4.048-8.933 9.04-8.933a9.07 9.07 0 0 1 5.865 2.134 9.07 9.07 0 0 1 5.865-2.134c4.993 0 9.04 4 9.04 8.933 0 4.934-4.047 8.933-9.04 8.933a9.07 9.07 0 0 1-5.865-2.134Z"
      clipRule="evenodd"
    />
    <path
      fill="#F9A000"
      fillRule="evenodd"
      d="M22.905 22.44a8.87 8.87 0 0 0 3.177-6.8 8.87 8.87 0 0 0-3.177-6.8 9.07 9.07 0 0 1 5.865-2.133c4.993 0 9.04 4 9.04 8.933 0 4.934-4.047 8.933-9.04 8.933a9.07 9.07 0 0 1-5.865-2.134Z"
      clipRule="evenodd"
    />
    <path
      fill="#FF5E00"
      fillRule="evenodd"
      d="M22.905 22.44a8.87 8.87 0 0 0 3.177-6.8 8.87 8.87 0 0 0-3.177-6.8 8.87 8.87 0 0 0-3.176 6.8 8.87 8.87 0 0 0 3.176 6.8Z"
      clipRule="evenodd"
    />
    <rect width={45} height={31} x={0.5} y={0.5} stroke="#F2F4F7" rx={5.5} />
  </svg>
);
export default SvgMastercard;
