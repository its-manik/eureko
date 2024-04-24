import Link from "next/link";
import React from "react";
import { PricingPlan } from "@/types";

const PricingCard: React.FC<PricingPlan> = ({
  title,
  description,
  price,
  features,
  buttonText,
}) => {
  return (
    <div className="flex group flex-col w-full p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow hover:shadow-2xl  xl:p-8 ">
      <h3 className="mb-4 text-2xl text-[#306059] font-semibold">{title}</h3>
      <p className="font-light text-[#418279] sm:text-lg ">{description}</p>
      <div className="flex justify-center items-baseline my-8">
        <span className="mr-2 text-5xl text-[#306059] font-extrabold">
         ${price}
        </span>
        <span className="text-[#418279]">/month</span>
      </div>

      <ul role="list" className="mb-8 space-y-4 text-left">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <svg
              className="flex-shrink-0 w-5 h-5 text-[#306059] "
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="text-[#306059]">{feature}</span>
          </li>
        ))}
      </ul>
      <Link
        href="#"
        className="text-[#383432] bg-primary-600 hover:bg-primary-700   hover:bg-[#418279] hover:text-white  tracking-widest font-bold  rounded-lg text-sm px-5 py-2.5 text-center border-[1px] transition-all group-hover:shadow-lg border-[#306059] hover:border-[#418279]"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default PricingCard;
