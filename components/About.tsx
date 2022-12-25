import Image from "next/image";
import React from "react";
import profile from "./Images/profile.png";
import { motion } from "framer-motion";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.div
        initial={{ opacity: 1, x: -200 }}
        // Everytime we scroll to the about me section animation plays
        whileInView={{ opacity: 1, x: 0 }}
        //If you only want the animation to happen once then.
        // viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="-mb-20"
      >
        <Image
          className="flex-shrink-0 w-56 h-60 rounded-lg object-cover md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          src={profile}
          alt="About Me Image"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A Bit About{" "}
          <span className="underline decoration-[#F8C77E]">Myself</span>
        </h4>
        <p className="text-base">
          Hello this is Abhishek Raj Poudel.I have been working with Reactjs and
          nextjs for over a year and am always striving for improvements. Here
          are some of my skills
        </p>
      </div>
    </div>
  );
}

export default About;
