"use client";
import React, { useEffect, useState } from "react";
import { TermsConditions } from "@/types";

import { client } from "@/lib/sanityClient";

const Section: React.FC<TermsConditions> = ({ title, description }) => {
  return (
    <section className="mt-10">
      <h2 className="text-xl md:tex2xl font-medium text-[#fff] mb-1">
        {title}
      </h2>
      <p className="text-[#fff] ">{description}</p>
    </section>
  );
};

const TermsConditions: React.FC = () => {
  const [termsConditionsData, setTermsConditionsData] = useState<
    TermsConditions[]
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      const query = `*[_type == "termsConditions"]`;

      try {
        setIsLoading(true);
        const data = await client.fetch(query);
        setTermsConditionsData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Sanity fetch error:", error);
        setIsLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);
  console.log(termsConditionsData, "termsConditionsData");
  return (
    <div className="bg-[#141414] min-h-screen -mt-28 pt-32 md:pt-40 py-12">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-6">
        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6 border-b border-white pb-5">
          Terms &amp; Conditions &nbsp;&nbsp;
        </h1>
        <div className="overflow-hidden">
          {termsConditionsData.map((item, index) => (
            <Section
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
