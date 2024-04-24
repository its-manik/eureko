import React from "react";
import Section from "./Section";
import { SectionsData } from "./Sectiondata";

const InovationHeadingText: React.FC = () => {
  return (
    <div className="  py-8 px-8 md:px-12">
      <div className=" mx-auto pt-6 grid grid-cols-1  md:grid-cols-3 ">
        {SectionsData.map((section, index) => (
          <Section
            key={index}
            title={section.title}
            icon={section.icon}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
};

export default InovationHeadingText;
