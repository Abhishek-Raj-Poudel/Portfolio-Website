import React from "react";
import { motion } from "framer-motion";

export default function BackgroundCircles() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 3, 2, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 10],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{}}
      className="relative flex justify-center items-center "
    >
      <div className="absolute border border-[#2E3135] opacity-50 rounded-full h-[300px] w-[250px] mt-52 animate-pulse " />
      <div className="absolute border border-[#7F4D3E] rounded-full opacity-60 h-[500px] w-[400px] mt-52 " />
      <div className="absolute border border-[#F8C77E] opacity-10 rounded-full  h-[650px] w-[550px] mt-52 animate-pulse " />
      <div className="absolute border border-[#B87C4C] opacity-30 rounded-full h-[800px] w-[700px] mt-52 animate-pulse " />
      <div className="absolute border border-[#412728] opacity-10 rounded-full h-[1000px] w-[900px] mt-52 animate-pulse " />
    </motion.div>
  );
}
