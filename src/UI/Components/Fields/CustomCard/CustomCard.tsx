import React, { ReactNode } from "react";
import "./CustomCard.scss";

interface CustomCardProps {
  children: ReactNode;
  width?: string | number;
  height?: string | number;
}

const CustomCard: React.FC<CustomCardProps> = ({ children, width, height }) => {
  const widthClass = width ? `w-${width}` : "w-auto";
  const heightClass = height ? `h-${height}` : "h-auto";

  return (
    <div className={`customCard ${widthClass} ${heightClass} `}>{children}</div>
  );
};

export default CustomCard;
