import Image from 'next/image';
import React from 'react'
import {VisionCardProps }from "@/types"

const visionCard: React.FC<VisionCardProps> = ({icon, title, description }) => {
  return (
    <div className="card group custom-bg-transition-main-page bg-white bg-opacity-5 shadow-lg cursor-pointer border-l-2 border-[#EDEDED]  p-6 ">
      <div className="w-[74px] Icon_BG_G  h-[74px] flex justify-center items-center  rounded-full ">
        <Image alt="icon" src={icon} height={50} width={50} />
      </div>
      <h3 className="text-xl text-[#fff] group-hover:text-[#e5e5e5] font-semibold mb-2 mt-3">
        {title}
      </h3>
      <p className="text-base  text-[#fff] tracking-wide  leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default visionCard