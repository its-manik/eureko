import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  imageSrc?: any;
  title?: string;
  date?: string;
  className?: string;
  classcardbg?: string;
  href?: any;
}

const ProductCard: React.FC<CardProps> = ({
  imageSrc,
  title,
  date,
  className,
  classcardbg,
  href,
}) => {
  return (
    <div
      className={` bg-white bg-opacity-5 group rounded-lg    group hover:-translate-y-3 duration-500 overflow-hidden shadow-sm cursor-pointer hover:shadow-lg ${classcardbg} `}
    >
      <div className={` ${className}`}>
        <Image
          src={imageSrc}
          loading="lazy"
          width={500}
          height={500}
          alt="News Image"
          className="w-full h-auto group-hover:opacity-70 rounded-lg"
        />
      </div>
      <div className="p-4">
        {date && (
          <div className="text-base text-gray-500 ">
            <span aria-hidden="true">{date}</span>
            <span className="sr-only">Full Date</span>
          </div>
        )}
        <h3 className="text-md leading-6 text-[#fff]  mb-2 font-medium   ">
          {title}
        </h3>
        <Link
          href={href ? href : ""}
          className=" text-[#fff] tracking-wide hover:text-[#1f3e39]   "
        >
          {`Read More`}
        </Link>
      </div>
    </div>
  );
}

export default ProductCard
 
