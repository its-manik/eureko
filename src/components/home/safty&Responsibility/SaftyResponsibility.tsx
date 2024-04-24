"use client";
import React, { useState, useEffect } from "react";
import SafetyInitiative from "./SafetyInitiative";
import Header_complete from "../common/Section_header/Header_complete";
import { SafetyResponsibilityInitiative } from "@/types";
import { client } from "@/lib/sanityClient";

const SafetyResponsibility = () => {
  const [safetyInitiatives, setSafetyInitiatives] = useState<
    SafetyResponsibilityInitiative[]
  >([]);

  useEffect(() => {
    const fetchSafetyInitiatives = async () => {
      const query = '*[_type == "safetyResponsibility"]';
      const data = await client.fetch(query);
      setSafetyInitiatives(data);
    };

    fetchSafetyInitiatives();
  }, []);

  return (
    <div className=" py-8">
      <div className="container mx-auto border-t border-gray-300 py-6">
        <Header_complete
          title="Harnessing AI for Everyday Excellence"
          description={`Bringing the power of artificial intelligence into the daily fabric of businesses and personal lives with Eureko's personalized and adaptable solutions:`}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-0">
          {safetyInitiatives.map((initiative, index) => (
            <SafetyInitiative key={index} initiative={initiative} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SafetyResponsibility;
