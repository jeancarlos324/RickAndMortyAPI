import React from "react";
import { motion } from "framer-motion";

const Chip = () => {
  return (
    <motion.div
      className="bg-slate-600 w-fit text-white p-3 cursor-pointer rounded-md"
      whileHover={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >RickAndMorty</motion.div>
  );
};

export default Chip;
