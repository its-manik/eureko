import React from "react";
import { ResearchInitialCards } from "@/types";

const researchcard: React.FC<ResearchInitialCards> = ({
  title,
  description,
}) => {
  return (
    <div className="text-center h-full group md:text-left md:min-h-[265px] m-auto bg-[#44887e] shadow-md p-4 py-6 custom-bg-transition group border-l-2  border-[#418279] hover:border-[#1f3e39]">
      <h2 className="text-xl text-left text-[#306059] group-hover:text-white  font-semibold mb-4   tracking-wider">
        {title}
      </h2>
      <p className="text-lg text-left  text-[#1f3e39] group-hover:text-white tracking-wide    ">
        {description}
      </p>
    </div>
  );
};

export default researchcard;
