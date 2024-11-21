import React from "react";

// Componente EngineSizeWindIcon
const EngineSizeWindIcon = ({
  width = 48,
  height = 48,
  fillColor = "#CCCCCC",
  strokeColor = "#999999",
  accentStrokeColor = "#666666",
}) => {
  return (
    <svg width={width} height={height} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Primeira parte do ícone */}
      <path
        d="M12.8115 16.0287L14.7658 18.6344H17.3716L19.3259 16.0287L16.9373 3H15.2001L12.8115 16.0287Z"
        fill={fillColor}
        stroke={strokeColor}
      />
      {/* Segunda parte do ícone */}
      <path
        d="M20.7139 18.2L17.4801 18.5896L16.1773 20.8463L17.4568 23.8416L29.9342 28.2874L30.8028 26.7829L20.7139 18.2Z"
        fill={fillColor}
        stroke={strokeColor}
      />
      {/* Terceira parte do ícone */}
      <path
        d="M14.54 23.8416L15.8195 20.8463L14.5166 18.5897L11.2828 18.2001L1.19396 26.783L2.06254 28.2874L14.54 23.8416Z"
        fill={fillColor}
        stroke={strokeColor}
      />
      {/* Círculo central */}
      <path
        d="M17.7403 19.503C17.7403 20.4261 16.992 21.1744 16.0689 21.1744C15.1458 21.1744 14.3975 20.4261 14.3975 19.503C14.3975 18.5799 15.1458 17.8315 16.0689 17.8315C16.992 17.8315 17.7403 18.5799 17.7403 19.503Z"
        fill={fillColor}
        stroke={strokeColor}
      />
      {/* Caminho do contorno (detalhes adicionais) */}
      <path
        d="M20.3159 32.9285C19.8921 32.5047 19.8921 31.8175 20.3159 31.3937L31.0602 20.6494C31.484 20.2256 32.1712 20.2256 32.5951 20.6494L35.6786 23.733C36.1025 24.1569 36.1025 24.8441 35.6786 25.2679L24.9344 36.0121C24.5106 36.436 23.8234 36.436 23.3995 36.0121L20.3159 32.9285Z"
        fill={fillColor}
      />
      {/* Linhas de contorno e detalhes */}
      <path
        d="M26.2938 33.319L24.7589 31.7841M28.5961 31.0166L27.0612 29.4818M30.8984 28.7143L29.3636 27.1794M33.2008 26.412L31.6659 24.8771M24.9344 36.0121L35.6786 25.2679C36.1025 24.8441 36.1025 24.1569 35.6786 23.733L32.5951 20.6494C32.1712 20.2256 31.484 20.2256 31.0602 20.6494L20.3159 31.3937C19.8921 31.8175 19.8921 32.5047 20.3159 32.9285L23.3995 36.0121C23.8234 36.436 24.5106 36.436 24.9344 36.0121Z"
        stroke={accentStrokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EngineSizeWindIcon;
