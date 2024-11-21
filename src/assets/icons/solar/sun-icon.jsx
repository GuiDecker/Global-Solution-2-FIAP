import React from "react";

const SunIcon = ({ width = 48, height = 48, color = "#FFE100", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0)">
      <path
        d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z"
        fill={color}
      />
      <path
        d="M24 2V6M24 42V46M8.44 8.44L11.28 11.28M36.72 36.72L39.56 39.56M2 24H6M42 24H46M8.44 39.56L11.28 36.72M36.72 11.28L39.56 8.44M34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14C29.5228 14 34 18.4772 34 24Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default SunIcon;