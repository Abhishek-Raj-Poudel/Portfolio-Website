import Image from "next/image";
import React from "react";
import webdev from "./Images/Netflix.png";
import { motion } from "framer-motion";

type Props = {};

export default function ExperienceCard({}: Props) {
  return (
    // overflow-hidden
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#161616] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Image
          className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover rounded-full"
          src={webdev}
          alt="Company Logo"
        ></Image>
      </motion.div>
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">CEO of ChronoABI</h4>
        <p className="font-bold text-2xl mt-1 ">ChronoABI</p>
        <div className="flex space-x-2 my-2">
          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li> Made this with that</li>
          <li>Summery Point Summery </li>
          <li>Summery Point Summery </li>
          <li>Summery Point Summery </li>
          <li>Summery Point Summery </li>
        </ul>
      </div>
    </article>
  );
}
