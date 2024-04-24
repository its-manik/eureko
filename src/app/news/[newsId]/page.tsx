"use client";

import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import Image from "next/image";
import { MdDateRange } from "react-icons/md";
import Pagebg from "../../../../public/images/pricing/page-title-bg2.jpg";

interface BlogPost {
  _id: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  title: string;
  date: string;
  authorName: string;
  description: string;
}

interface PageProps {
  params: {
    newsId: string;
  };
}

const Page: React.FC<PageProps> = ({ params }) => {
  const [postData, setPostData] = useState<BlogPost | null>(null);

  useEffect(() => {
    const fetchPostData = async () => {
      const data: BlogPost = await client.fetch(
        `*[_type == "newsblogpost" && _id == $newsId][0]`,
        { newsId: params.newsId }
      );
      setPostData(data);
    };

    fetchPostData();
  }, [params.newsId]);
  const SkeletonLoader = ({ className }: any) => (
    <div className={`animate-pulse ${className} bg-gray-300 rounded`}></div>
  );

  if (!postData)
    return (
      <div className="">
        <div className="">
          <SkeletonLoader className="w-full h-[70vh]" />
        </div>
        <div className="container mx-auto px-4 md:px-16 md:w-[60%] py-8">
          <article className="bg-white">
            <SkeletonLoader className="w-full h-20 md:h-40" />
            <div className="p-6 px-0 border-b border-gray-300 space-y-4">
              <SkeletonLoader className="w-1/2 h-4" />
              <SkeletonLoader className="w-1/4 h-4" />
              <SkeletonLoader className="w-3/4 h-6" />
              <SkeletonLoader className="w-full h-3" />
            </div>
          </article>
        </div>
      </div>
    );

  return (
    <>
      <div className="mt-[-120px]">
        <Image
          src={Pagebg}
          alt="Pagebg"
          className="w-full max-h-[70vh] object-cover"
        />
      </div>
      <div className="container mx-auto px-4 md:px-16 md:w-[60%] py-8">
        <article className="bg-white ">
          {postData.mainImage && (
            <Image
              src={urlFor(postData.mainImage).url()}
              alt="Main Image"
              className="w-full h-auto max-h-80 object-cover"
              width={1920}
              height={175}
            />
          )}

          <div className="p-6 px-0 border-b border-gray-300">
            <div className="flex gap-8 items-center text-gray-600">
              <span className="text-base inline-flex align-middle gap-2 text-[#306059]">
                <MdDateRange size={23} color="#418279" />{" "}
                {new Date(postData.date).toLocaleDateString()}
              </span>
              <span className="text-base [text-[#306059]">
                {postData.authorName}
              </span>
            </div>
            <h1 className="text-4xl font-bold mt-2 mb-4 text-[#306059]">
              {postData.title}
            </h1>
            <p className="mt-4 text-[#1f3e39]">{postData.description}</p>
          </div>
        </article>
      </div>
    </>
  );
};

export default Page;
