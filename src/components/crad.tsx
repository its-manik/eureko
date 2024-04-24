import React from "react";
import Image from "next/image";
import Link from "next/link";


interface CardProps {
  imageSrc?: any;
  title?: string;
  date?: string;
  className?: string;
  classcardbg?: string;
  href?: any 
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  date,
  className,
  classcardbg,
  href
}) => {


    const imageWidth = 500;
    const imageHeight = 500;
  return (
    <div
      className={` bg-white group rounded-lg    group hover:-translate-y-3 duration-500 overflow-hidden shadow-sm cursor-pointer hover:shadow-lg ${classcardbg} `}
    >
      <div className={` ${className}`}>
        <Image
          src={imageSrc}
          loading="lazy"
          alt="News Image"
          width={imageWidth} 
          height={imageHeight} 
          layout="responsive" 
          className="w-full h-auto group-hover:opacity-70 rounded-lg"
        />
      </div>
      <div className="p-4">
        {date && (
          <div className="text-base text-gray-600 mt-2">
            <span aria-hidden="true">{date}</span>
            <span className="sr-only">Full Date</span>
          </div>
        )}
        <h3 className="text-md leading-6 tracking-wider text-[#306059]  mb-2 font-semibold   ">
          {title}
        </h3>
        <Link
          href={href ? href : ""}
          className=" text-[#418279] tracking-wide hover:text-[#1f3e39]   "
        >
          {`Read More`}
        </Link>
      </div>
    </div>
  );
};

export default Card;
