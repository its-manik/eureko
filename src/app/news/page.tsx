import React from "react";
import News from "./news";
import HeroSection from "./heroSection";


const page = () => {
  return (
    <>
      <HeroSection/>
      <div className="md:pt-12">
        <div className=" px-8  md:px-16 py-4  ">
          <h2 className="text-2xl md:text-4xl font-medium  text-[#306059]">
            Latest News & Insights
          </h2>
        </div>
        <News />
      </div>
    </>
  );
};

export default page;
