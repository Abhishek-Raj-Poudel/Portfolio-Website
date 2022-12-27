import React from "react";
import ExperienceCard from "./ExperienceCard";

type Props = {};

function WorkExperience({}: Props) {
  return (
    <div className=" section  overflow-hidden  text-left md:flex-row max-w-full px-10 justify-evenly  ">
      <h3 className="sectionTitle">Experience</h3>

      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-10 customScrollbar">
        {/* Experience Card */}
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
}

export default WorkExperience;
