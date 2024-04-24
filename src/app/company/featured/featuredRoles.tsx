"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/lib/sanityClient";
import { featuredRoles } from "@/types";
import Link from "next/link";
import Header_complete from "@/components/home/common/Section_header/Header_complete";

const FeaturedRoles: React.FC = () => {
  const [featuredData, setFeaturedData] = useState<featuredRoles[]>([]);

  useEffect(() => {
    const query = '*[_type == "featuredRoles"]';
    client
      .fetch<featuredRoles[]>(query)
      .then((data) => {
        setFeaturedData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className=" border-t-[1px] py-12 border-gray-300">
      <Header_complete
        title="Featured roles"
        description="We are constantly seeking talented individuals to join our team. Explore featured roles or view all open roles."
      />
      <div className="py-8 px-8 md:px-16 -mt-8">
        <div className="mx-auto pt-6">
          <ul className="space-y-4">
            {featuredData.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out"
              >
                <div className="flex-1">
                  <p className="text-base font-normal leading-relaxed text-[#1f3e39]">
                    <strong className="font-semibold">{item.title}:</strong>{" "}
                    {item.description}
                  </p>
                </div>
                <Link
                  href={item.href ? item.href : "/"}
                  className="ml-4 bg-[#418279]  text-white border border-transparent hover:border-white rounded-full px-3 py-1 transition-colors duration-200 ease-in-out"
                >
                  Apply Now
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRoles;
