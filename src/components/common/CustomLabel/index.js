import React from "react";
import "./styles.css";

function getStyle(type) {
  switch (type) {
    case "settled":
      return {
        bgColor: "#0F162A",
        color: "white",
      };
    case "pending":
      return {
        bgColor: "#F1F4F8",
        color: "#19181A",
      };
    case "processing":
      return {
        bgColor: "#F1F4F8",
        color: "#19181A",
      };
    case "rejected":
      return {
        bgColor: "red",
        color: "white",
      };
    default:
      return {
        bgColor: "transparent",
        color: "black",
      };
  }
}

export const CustomLabel = ({ text, style }) => {
  console.log(style);
  return (
    <div
      className="CustomLabel"
      style={{
        background: getStyle(style).bgColor,
        color: getStyle(style).color,
      }}
    >
      {text}
    </div>
  );
};
