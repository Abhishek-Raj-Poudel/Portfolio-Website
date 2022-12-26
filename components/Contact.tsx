import React from "react";

type Props = {};

export default function Contact({}: Props) {
  return (
    <div className="section max-x-7xl px-10 justify-evenly mx-auto ">
      <h3 className="sectionTitle">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F8C77E]">Let's talk</span> and
          see how I can help you
        </h4>
      </div>
    </div>
  );
}
