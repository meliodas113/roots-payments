import React from "react";
import "./styles.css";

export const CustomButton = ({ text, bgColor, color, icon }) => {
  return (
    <div
      className="CustomButton"
      style={{ backgroundColor: bgColor, color: color }}
    >
      {icon && icon}
      {text}
    </div>
  );
};
