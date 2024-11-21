import React from "react";

const WindIcon = ({ width = 48, height = 48, color = "#5EA9FF", ...props }) => (
  <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M19.18 9.17997C19.6446 8.71259 20.2175 8.36725 20.8477 8.17465C21.478 7.98204 22.1461 7.94814 22.7926 8.07595C23.4391 8.20376 24.044 8.48932 24.5535 8.90726C25.0631 9.32519 25.4614 9.86254 25.7133 10.4716C25.9651 11.0806 26.0625 11.7423 25.9969 12.3981C25.9313 13.0538 25.7048 13.6832 25.3373 14.2303C24.9699 14.7774 24.4729 15.2252 23.8907 15.5339C23.3085 15.8426 22.659 16.0027 22 16H4M25.18 38.82C25.6446 39.2873 26.2175 39.6327 26.8477 39.8253C27.478 40.0179 28.1461 40.0518 28.7926 39.924C29.4391 39.7962 30.044 39.5106 30.5535 39.0927C31.0631 38.6747 31.4614 38.1374 31.7133 37.5284C31.9651 36.9194 32.0625 36.2576 31.9969 35.6018C31.9313 34.9461 31.7048 34.3167 31.3373 33.7696C30.9699 33.2226 30.4729 32.7748 29.8907 32.466C29.3085 32.1573 28.659 31.9972 28 32H4M35.46 15.46C36.0417 14.8797 36.7574 14.4518 37.5439 14.214C38.3303 13.9762 39.1632 13.9358 39.969 14.0965C40.7747 14.2572 41.5284 14.614 42.1635 15.1353C42.7985 15.6566 43.2953 16.3264 43.61 17.0853C43.9246 17.8443 44.0473 18.6692 43.9673 19.4869C43.8873 20.3046 43.607 21.09 43.1512 21.7736C42.6955 22.4572 42.0783 23.0179 41.3542 23.4063C40.6302 23.7946 39.8216 23.9985 39 24H4"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WindIcon;