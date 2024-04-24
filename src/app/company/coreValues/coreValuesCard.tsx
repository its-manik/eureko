import React from "react";
import { CoreValue } from "@/types";

const coreValuesCard: React.FC<CoreValue> = ({ heading, description }) => (
  <div className="bg-white group cursor-pointer flex flex-col justify-between custom-bg-transition group relative shadow-md hover:shadow-lg p-6">
    <div>
      <h2 className="text-xl text-[#306059]  group-hover:text-white tracking-wider font-semibold mb-4">{heading}</h2>
      <p className="text-lg tracking-normal group-hover:text-white  text-[#1f3e39]">{description}</p>
    </div>
  </div>
);

export default coreValuesCard;
