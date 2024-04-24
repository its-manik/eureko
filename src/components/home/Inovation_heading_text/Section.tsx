import React from "react";
import { SectionProps } from "./types";
import Image from "next/image";
const Section: React.FC<SectionProps> = ({ icon, title, description }) => (
  <div className="group custom-bg-transition-main-page cursor-pointer  shadow-md border-l-2 border-[#EDEDED] mx-0 px-6 py-8">
    <div className="w-[74px] Icon_BG_G h-[74px] flex justify-center items-center  rounded-full ">
      <Image alt="icon" src={icon} height={50} width={50} />
    </div>
    <h2 className="text-xl mt-3 text-[#fff] group-hover:text-[#e5e5e5] font-semibold mb-2 ">
      {title}
    </h2>
    <p className="text-lg text-[#fff] tracking-normal group-hover:text-[#fff] ">
      {description}
    </p>
  </div>
);

export default Section;
