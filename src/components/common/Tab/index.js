import React from "react";
import "./styles.css";

const Tab = ({ text, icon }) => {
  return (
    <div className="CustomTab">
      {icon}
      {text}
    </div>
  );
};

export default Tab;
