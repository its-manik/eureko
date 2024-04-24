"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import CoreValuesCard from "./coreValuesCard";
import { CoreValue } from "@/types";

const CoreValuesList: React.FC = () => {
  const [coreValues, setCoreValues] = useState<CoreValue[]>([]);

  useEffect(() => {
    client
      .fetch<CoreValue[]>('*[_type == "coreValue"]')
      .then((data) => {
        setCoreValues(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {coreValues.map(({ _id, heading, description }) => (
        <CoreValuesCard key={_id} heading={heading} description={description} />
      ))}
    </>
  );
};

export default CoreValuesList;
