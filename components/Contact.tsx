import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  // on submit will take you to your email and have all the value you submitted in teh contact me section.
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:abhishekrajpoudel@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="section max-x-7xl px-10 justify-evenly mx-auto ">
      <h3 className="sectionTitle">Contact</h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          <span className="underline decoration-[#F8C77E]">{`Let's talk`}</span>{" "}
          and see how I can help you
        </h4>
        <div className="space-y-10">
          <div className="flex item-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f8c77e] h-7 w-7 animate-pulse" />
            <p className="text-xl">9863993140</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f8c77e] h-7 w-7 animate-pulse" />
            <p className="text-xl">Dillibazar,Kathmandu,Nepal</p>
          </div>
          <div className="flex item-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f8c77e] h-7 w-7 animate-pulse" />
            <p className="text-xl">abhishekrajpoudel@gmail.com</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2 ">
            {/* spreading the name into the register. */}
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f8c77e] py-5 px-10 rounded-sm text-[#111111] font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
