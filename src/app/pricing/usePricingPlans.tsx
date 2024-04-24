"use client";
import React, { useEffect, useState } from "react";
import Header_complete from "@/components/home/common/Section_header/Header_complete";
import Image from "next/image";
import Pagebg from "../../../public/images/pricing/page-title-bg2.jpg";
import { client } from "@/lib/sanityClient";
import { PricingPlan } from "@/types";
import PricingCard from "@/app/pricing/PricingCard";
import HeroSection from "./heroSection";
const usePricingPlans = () => {
  const [pricingPlans, setPricingPlans] = useState<PricingPlan[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPricingPlans = async () => {
      const query = `*[_type == "pricingPlan"]`;

      try {
        setIsLoading(true);
        const data = await client.fetch(query);
        const reversedData = data.reverse();
        setPricingPlans(reversedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Sanity fetch error:", error);
        setIsLoading(false);
      }
    };

    fetchPricingPlans();
  }, []);

  return (
    <div  >
      <HeroSection />

      <div
        className="py-12"
      >
        <Header_complete
          title="Our Pricing Plan"
          description="Lorem ipsum dolor sit amet, where technology, innovation, and capital can unlock."
        />
        <section>
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 space-y-8 sm:space-y-0 lg:space-y-0">
              {pricingPlans?.map((item, index) => (
                <PricingCard
                  key={index}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  features={item.features}
                  buttonText={item.buttonText}
                />
              ))}
              {isLoading && (
                <div className="flex flex-col w-full p-6 mx-auto max-w-lg text-center bg-white rounded-lg border border-gray-100 shadow animate-pulse">
                  <div className="mb-4 h-6 bg-gray-300 rounded w-3/4 mx-auto"></div>{" "}
                  <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto mb-4"></div>{" "}
                  <div className="flex justify-center items-center my-8">
                    <div className="h-8 bg-gray-300 rounded w-1/4 mx-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/6"></div>
                  </div>
                  <div className="mb-8 space-y-4">
                    {[1, 2, 3, 4, 5].map((key) => (
                      <div
                        key={key}
                        className="h-4 bg-gray-300 rounded w-5/6 mx-auto"
                      ></div>
                    ))}
                  </div>
                  <div className="h-10 bg-gray-300 rounded w-1/2 mx-auto"></div>{" "}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default usePricingPlans;
