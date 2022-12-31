import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Social } from "../typings";
type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky  top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row item-center"
      >
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </motion.div>
      {/* Email */}
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
        {/* <Link href="#contact"> */}
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />

        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Email Me !
        </p>
        {/* </Link> */}
      </motion.div>
    </header>
  );
}
