import React from "react";
import Right from "../../../public/images/company/right-1.jpeg";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
import Title from "@/components/home/common/Section_header/Title";
import CoreValue from "./coreValues/corevalue";
import FeaturedRoles from "./featured/featuredRoles";
import Chatbotinovation from "./chatbotInovation/chatbotinovation";

interface Section {
  heading: string;
  items: string[];
}

const BenefitsData: Section[] = [
  {
    heading: "For employees",
    items: [
      "Health, dental, and vision insurance",
      "Mental healthcare support and services",
      "Commuter benefits",
      "401(k) with generous matching",
      "Domestic conference budget for each employee",
    ],
  },
  {
    heading: "Life & family",
    items: [
      "Flexible working hours",
      "20 weeks paid parental leave",
      "Life and AD&D insurance",
      "Fertility treatment and family planning coverage",
      "Flexible spending account for healthcare and dependent care",
    ],
  },
  {
    heading: "Culture & development",
    items: [
      "Annual learning & development stipend",
      "Employee resource groups",
      "Team-driven celebrations and events",
      "Daily breakfast, lunch, and dinner",
      "Freshly baked cookies",
    ],
  },
];

const aboutEureko = () => {
  return (
      <div className="Company_page mx-auto  ">
        <div className=" m-auto py-6    md:px-16">
          <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between pt-5">
            <div className="text-center md:text-left m-auto">
              <h2 className="text-3xl md:text-center lg:text-left md:text-5xl font-bold mb-4 text-white">
                About Eureko
              </h2>
              <p className="text-base my-2  leading-relaxed text-white ">
                Eureko: Pioneering the Future of Artificial General Intelligence
              </p>
            </div>
            <p className="text-base my-2  leading-relaxed text-gray-200 ">
              Our vision at Eureko is to create a future where Artificial
              General Intelligence (AGI) acts as a catalyst for unprecedented
              growth, innovation, and positive change. We envision a world where
              AGI not only complements human intelligence but also amplifies our
              potential to solve the most pressing global challenges.
            </p>
          </div>
        </div>
        <Chatbotinovation />

        <div className="  py-6 m-auto   md:px-16">
          <div className="grid grid-cols-1 px-8 border-t-[1px] border-gray-300 md:grid-cols-2 gap-8 justify-between pt-5">
            <div className="text-center md:text-left m-auto">
              <h2 className="text-3xl md:text-center lg:text-left md:text-5xl font-medium mb-4 text-white">
                Join us in shaping the future of technology
              </h2>
            </div>
            <p className="text-lg tracking-wider my-2  leading-relaxed text-white ">
              At EUREKO, we are always on the lookout for talented and
              passionate individuals to join our team. We offer a range of
              career opportunities that allow professionals to contribute to our
              mission of advancing Artificial General Intelligence (AGI) for the
              betterment of people. Our open positions span various disciplines
              and expertise levels, reflecting our commitment to diversity,
              innovation, and excellence in the field of AI.
            </p>
          </div>
        </div>

        <div className=" border-t-[1px] py-12 border-gray-300">
          <Title text="Core values" />
          <div className="py-8 px-8 md:px-16 -mt-8">
            <div className=" mx-auto pt-6 grid grid-cols-1 gap-4 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3 ">
              <CoreValue />
            </div>
          </div>
        </div>
        <div className=" md:px-16">
          <div className=" border-t-[1px] py-6 border-gray-300 md:py-12">
            <h2 className={`text-4xl font-bold mb-4 text-white  text-center`}>
              Benefits
            </h2>
            <div className="pb-6 m-auto w-full md:w-4/5">
              <p className="text-center  text-gray-200 text-lg tracking-wider leading-relaxed">
                We know that well-being is at the center of everyday life. Our
                comprehensive benefits package supports you where you are, so
                you can take care of what matters today while confidently
                planning for the future.
              </p>
            </div>
            <div className="md:flex md:justify-between px-8   md:px-0 flex-wrap lg:flex-nowrap gap-x-1">
              {BenefitsData.map((section: Section, index: number) => (
                <div key={index} className="mt-6 md:mt-0">
                  <h2 className="font-medium text-xl text-white">
                    {section.heading}
                  </h2>
                  <ul className="mt-3">
                    {section.items.map((item: string, idx: number) => (
                      <li key={idx} className="li leading-relaxed ">
                        <p className="  text-gray-200 inline-flex text-wrap tracking-wider items-start gap-x-2">
                          <FaCheck size={18} color="#ced0d9" className="mt-1" />
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <FeaturedRoles />
      </div>
  );
};

export default aboutEureko;
