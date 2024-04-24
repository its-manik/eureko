"use client";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import { CompanyChatbot } from "@/types";

const Chatbotinovation: React.FC = () => {
  const [sections, setSections] = useState<CompanyChatbot[]>([]);

  useEffect(() => {
    client
      .fetch<CompanyChatbot[]>('*[_type == "chatbotInovationCompany"]')
      .then((data) => setSections(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className=" m-auto">
        {sections.map((item, index) => {
          const customStyle = () => {
            if (index % 2 !== 0) {
              return {
                order: 2,
              };
            } else {
              return {};
            }
          };

          return (
            <div
              key={index}
              className="grid grid-cols-1 px-8 py-6 md:grid-cols-2 gap-8 border-t-[1px] border-gray-300 justify-between pt-5"
            >
              <div
                className="text-center md:text-left m-auto"
                style={customStyle()}
              >
                <h2 className="text-2xl md:text-4xl font-medium mb-4 text-white">
                  {item.title}
                </h2>
                <p className="text-base mt-2 font-normal lg:text-left text-white">
                  {item.description}
                </p>
              </div>
              <div className="">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    alt="Chatbot image"
                    width={550}
                    height={550}
                    className="rounded-lg shadow-zinc-900 shadow-inner object-cover"
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Chatbotinovation;
