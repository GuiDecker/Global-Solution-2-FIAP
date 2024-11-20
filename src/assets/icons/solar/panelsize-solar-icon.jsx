import React from "react";

const PanelSizeSolarIcon = ({
  width = 44,
  height = 36,
  primaryColor = "#41588A",
  secondaryColor = "#27384B",
  accentColor = "#CCCCCC",
  strokeColor = "#666666",
  ...props
}) => (
  <svg width={width} height={height} viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M6.66526 20.3054L1.43436 0.5H26.3223L32.3007 20.3054H6.66526Z" fill={primaryColor} stroke={strokeColor} />
    <line
      y1="-0.5"
      x2="21.5718"
      y2="-0.5"
      transform="matrix(0.29116 0.956674 -0.92927 0.369401 20.4131 0.44873)"
      stroke={strokeColor}
    />
    <line
      y1="-0.5"
      x2="21.5718"
      y2="-0.5"
      transform="matrix(0.29116 0.956674 -0.92927 0.369401 7.85156 0.44873)"
      stroke={strokeColor}
    />
    <line x1="5.49609" y1="15.2021" x2="30.6195" y2="15.2021" stroke={strokeColor} />
    <line x1="2.35547" y1="4.43481" x2="27.4789" y2="4.43481" stroke={strokeColor} />
    <line x1="3.92578" y1="9.8186" x2="29.0492" y2="9.8186" stroke={strokeColor} />
    <line
      y1="-0.5"
      x2="21.5718"
      y2="-0.5"
      transform="matrix(0.29116 0.956674 -0.92927 0.369401 14.1318 0.44873)"
      stroke={strokeColor}
    />
    <path d="M6.2812 20.8054H32.975L32.1897 23.5533H5.49609L6.2812 20.8054Z" fill={secondaryColor} />
    <path d="M0.785472 0L6.28125 20.8054L5.49614 23.5533L0.000109673 2.24317L0.785472 0Z" fill={secondaryColor} />
    <path
      d="M23.143 28.9683C22.6438 28.4691 22.6438 27.6597 23.143 27.1606L35.7973 14.5062C36.2965 14.007 37.1058 14.007 37.605 14.5062L41.2368 18.138C41.736 18.6372 41.736 19.4466 41.2368 19.9458L28.5825 32.6001C28.0833 33.0993 27.2739 33.0993 26.7747 32.6001L23.143 28.9683Z"
      fill={accentColor}
    />
    <path
      d="M30.1835 29.4282L28.3758 27.6204M32.8952 26.7165L31.0874 24.9088M35.6068 24.0049L33.799 22.1971M38.3184 21.2932L36.5107 19.4855M28.5825 32.6001L41.2368 19.9458C41.736 19.4466 41.736 18.6372 41.2368 18.138L37.605 14.5062C37.1058 14.007 36.2965 14.007 35.7973 14.5062L23.143 27.1606C22.6438 27.6597 22.6438 28.4691 23.143 28.9683L26.7747 32.6001C27.2739 33.0993 28.0833 33.0993 28.5825 32.6001Z"
      stroke={strokeColor}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PanelSizeSolarIcon;
