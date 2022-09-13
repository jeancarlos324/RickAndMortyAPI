import Card from "../cards/Card";
import React from "react";
import { motion } from "framer-motion";
const ChipContent = ( {title, content, className} ) => {
  return(
  <motion.div   className={`${className} flex flex-col w-full`}>
    <h3 className="text-title-chip uppercase">{title}</h3>
    <span className="">{content}</span>
  </motion.div>
  )
};

export default ChipContent;
