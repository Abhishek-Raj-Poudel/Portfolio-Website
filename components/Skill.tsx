import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Typescript from "./Images/Typescript.svg";
import { Skill as SkillType } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

export default function Skill({ skill, directionLeft }: Props) {
  return (
    // Here we layered the proficienty percentage so that it only gets shown when you hover on it.
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{ y: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <img
          src={urlFor(skill.image).url()}
          alt="Skill Logo"
          className="rounded-full border broder-gray-700 object-cover p-1 w-24 h-24 xl:w-32 xl:h-32  filter group-hover:grayscale transition duration-200 ease-in-out"
        />
      </motion.div>
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-200 ease-in-out group-hover:bg-white w-24 h-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="grid place-items-center h-full w-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
