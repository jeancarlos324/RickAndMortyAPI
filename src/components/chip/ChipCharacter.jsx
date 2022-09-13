import React from "react";

const ChipCharacter = ({ title, content, className }) => {
  return (
    <div className={`${className} flex`}>
      <div className="bg-slate-200">
        H 
      </div>
      <div>
        <h3>{title}</h3>
        <span>{content}</span>
      </div>
    </div>
  );
};

export default ChipCharacter;
