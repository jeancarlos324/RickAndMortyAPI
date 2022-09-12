import Card from "../cards/Card";
import React from "react";

const ChipContent = ( {title, content, className} ) => {
  return( 
  <div className={`${className} flex flex-col w-full`}>
    <h3 className="text-title-chip uppercase">{title}</h3>
    <span className="text-content-chip">{content}</span>
  </div>
  )
};

export default ChipContent;
