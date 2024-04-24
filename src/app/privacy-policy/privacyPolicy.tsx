"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../sanity/lib/client";

import { PrivacyPolicy } from "@/types";

const Section: React.FC<PrivacyPolicy> = ({ title, description }) => {
  return (
    <section className="mt-6">
      <h2 className="text-2xl font-medium text-[#fff] mb-4">{title}</h2>
      <p className="text-[#fff] mb-4">{description}</p>
    </section>
  );
};

const PrivacyPolicy: React.FC = () => {
  const [sections, setSections] = useState<PrivacyPolicy[]>([]);

  useEffect(() => {
    const fetchSections = async () => {
      const query = '*[_type == "privacyPolicy"]';
      const data = await client.fetch(query);
      setSections(data);
    };

    fetchSections();
  }, []);

  return (
    <div className="bg-[#141414] min-h-screen -mt-28 pt-32 md:pt-40 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-white  border-b border-white pb-5 mb-6">
          Privacy policy
        </h1>
        <p className="text-base text-white  mb-8">
          Updated: {"January 14, 2024"}
        </p>

        <div className="overflow-hidden">
          {sections.map((section, index) => (
            <Section
              key={index}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
