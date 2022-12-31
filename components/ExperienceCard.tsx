import Image from "next/image";
import React from "react";
import webdev from "./Images/Netflix.png";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    // overflow-hidden
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0  md:w-[500px] xl:w-[700px] snap-center bg-[#323232] py-10 px-16 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          className="w-32 h-32 xl:w-[200px] xl:h-[200px] object-cover rounded-full"
          src={urlFor(experience?.companyImage).url()}
          alt="Company Logo"
        />
      </motion.div>
      <div className="px-0">
        <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1 ">{experience.company}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              src={urlFor(technology?.image).url()}
              alt="technologies"
              className="h-8 w-8 rounded-full"
            />
          ))}

          {/* tech used */}
          {/* tech used */}
          {/* tech used */}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-w-56 pr-5 h-48 scrollbar-thin scrollbar-track-black scrollbar-thumb-primary  overflow-y-scroll">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
