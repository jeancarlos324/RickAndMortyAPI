import React from "react";
import { motion } from "framer-motion";

const Chip = ({ title, content, className, iconName }) => {
  return (
    <motion.div
      className={`${className} flex gap-2 cursor-default py-1`}
      whileHover={{ delay: 0.2,scale:0.95 }}
      transition={{ type: "tween", stiffness: 400, damping: 10 }}
    >
      <motion.div
        whileHover={{ opacity: 0.7, delay: 0.2, scale: 1.6 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className="flex w-[15%] items-center justify-center fill-white-variant scale-150"
      >
        <i className={`${iconName}`}></i>
      </motion.div>
      <div className="w-[75%] flex flex-col items-start justify-center ">
        <h3 className="text-title-chip uppercase">{title}</h3>
        <span className="text-content-chip">{content}</span>
      </div>
    </motion.div>
  );
};

export default Chip;
