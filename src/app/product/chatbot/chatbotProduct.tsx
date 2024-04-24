"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanityClient"; 
import { ChatbotSolution } from "@/types";

const ChatbotProduct = () => {
  const [chatbotData, setChatbotData] = useState<ChatbotSolution[]>([]);

  useEffect(() => {
    const query = '*[_type == "chatbotProduct"]';
    client.fetch(query).then((data) => {
      setChatbotData(data);
    });
  }, []);
  return (
    <div className=" m-auto">
      {chatbotData.map((item, index) => {
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
              <p className="text-lg tracking-wider mt-2 font-normal lg:text-left text-white">
                {item.description}
              </p>
            </div>
            <div className="">
              {item.imageUrl && (
                <Image
                  src={urlFor(item.imageUrl).url()}
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
  );
};

export default ChatbotProduct;
