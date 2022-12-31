import React from "react";
import { Skill as SkillType } from "../typings";
import Skill from "./Skill";

type Props = {
  skills: SkillType[];
};

export default function Skills({ skills }: Props) {
  return (
    <div className=" section justify-center md:text-left max-w-[2000px] xl:px-10  xl:space-y-0  ">
      <h3 className="sectionTitle">Skills</h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-600">
        Hover to see current Proficiency
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-5">
        {skills.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
        {skills.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </div>
    </div>
  );
}
