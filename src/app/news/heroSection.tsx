"use client";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import Image from "next/image";

interface ImageData {
  image?: {
    alt?: string;
  };
}

function HeroSection() {
  const [imageData, setImageData] = useState<ImageData | null>(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "NewsHeroImage"][0]`)
      .then((data) => {
        setImageData(data);
      })
      .catch(console.error);
  }, []);
  const SkeletonLoader = ({ className }: any) => (
    <div className={`animate-pulse ${className} bg-gray-300 rounded`}></div>
  );

  if (!imageData)
    return (
      <div>
        <div className="">
          <div className="">
            <SkeletonLoader className="w-full h-[70vh]" />
          </div>
        </div>
      </div>
    );

  if (!imageData.image) return <div>Image data is missing</div>;

  return (
    <div className="mt-[-100px]">
      <Image
        src={urlFor(imageData.image).url()}
        alt={imageData.image.alt || "default alt text"}
        className="w-full max-h-[80vh] object-cover"
        width={1920}
        height={1080}
      />
    </div>
  );
}

export default HeroSection;
