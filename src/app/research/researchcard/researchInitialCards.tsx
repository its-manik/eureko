"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import Researchcard from "./researchcard";
import { ResearchInitialCards } from "@/types";

const ResearchInitialCards = () => {
  const [researchData, setResearchData] = useState<ResearchInitialCards[]>([]);

  useEffect(() => {
    client
      .fetch('*[_type == "researchInitialCard"]')
      .then((data) => setResearchData(data))
      .catch(console.error);
  }, []);
  return (
    <div className="  py-6 m-auto md:px-0 border-t border-gray-300">
      <div className="grid grid-cols-1 px-8 lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between pt-5">
        {researchData.map((section, index) => (
          <Researchcard
            key={index}
            title={section.title}
            description={section.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ResearchInitialCards;
