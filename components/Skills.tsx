import React from "react";
import Skill from "./Skill";

type Props = {};

export default function Skills({}: Props) {
  return (
    <div className=" section justify-center md:text-left max-w-[2000px] xl:px-10  xl:space-y-0  ">
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600">
        Hover to see current Proficiency
      </h3>
      <div className="grid grid-cols-4 gap-5">
        {/* React */}
        <Skill />
        {/* Nextjs */}
        <Skill />
        {/* Tailwind Css */}
        <Skill />
        {/* Typescript */}
        <Skill />
        {/* figma */}
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </div>
  );
}
