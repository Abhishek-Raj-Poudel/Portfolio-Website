import Image from "next/image";
import React from "react";
import profile from "./Images/profile.png";
import { motion } from "framer-motion";
import { PageInfo } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="section md:flex-row max-w-7xl px-10 justify-evenly  ">
      <h3 className="sectionTitle">About</h3>
      <motion.div
        initial={{ opacity: 1, x: -200 }}
        // Everytime we scroll to the about me section animation plays
        whileInView={{ opacity: 1, x: 0 }}
        //If you only want the animation to happen once then.
        // viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="-mb-20"
      >
        <img
          className="flex-shrink-0 w-56 h-60 rounded-lg object-cover md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          src={urlFor(pageInfo?.profilePic).url()}
          alt="About Me Image"
        />
      </motion.div>
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          A Bit About{" "}
          <span className="underline decoration-[#F8C77E]">Myself</span>
        </h4>
        <p className="text-base">{pageInfo.backgroundInformation}</p>
      </div>
    </div>
  );
}

export default About;
