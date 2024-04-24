"use client";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import Card from "@/components/crad";
interface BlogCardItem {
  _id: string;
  cardImage: string;
  cardTitle: string;
  date: string;
  slug: { current: string };
}

const BlogPosts: React.FC = () => {
  const [blogData, setBlogData] = useState<BlogCardItem[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    client.fetch(`count(*[_type == "newsblogpost"])`).then((total: number) => {
      setTotalPages(Math.ceil(total / itemsPerPage));
    });

    client
      .fetch(
        `*[_type == "newsblogpost"]{
          "cardImage": cardImage.asset->url,
          _id,
          cardTitle,
          "date": date,
          "slug": slug.current
        }[${currentPage * itemsPerPage}...${(currentPage + 1) * itemsPerPage}]`
      )
      .then((data: BlogCardItem[]) => {
        setBlogData(data);
      })
      .catch(console.error);
  }, [currentPage]);

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const renderPagination = () => {
    let startPage = Math.max(currentPage - 2, 0);
    let endPage = Math.min(startPage + 4, totalPages);

    if (totalPages - startPage < 4) {
      startPage = Math.max(totalPages - 4, 0);
    }

    let pages = [];
    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <li
          key={i}
          className={`px-4 py-2 ${
            currentPage === i
              ? "bg-[#306059] text-white"
              : "bg-gray-200 text-gray-700"
          } rounded-md`}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage(i);
            }}
            className={`block`}
          >
            {i + 1}
          </a>
        </li>
      );
    }

    return (
      <div className="flex justify-center items-center my-8">
        <button
          onClick={() => {
            if (currentPage > 0) setCurrentPage(currentPage - 1);
          }}
          className="px-4 py-2 mx-2 text-gray-700 bg-gray-200 rounded-md hover:bg-[#418279] hover:text-white"
          disabled={currentPage === 0}
        >
          Previous
        </button>
        <ul className="flex gap-x-4 ">{pages}</ul>
        <button
          onClick={() => {
            if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
          }}
          className="px-4 py-2 mx-2 text-gray-700 bg-gray-200 rounded-md hover:bg-[#418279] hover:text-white"
          disabled={currentPage >= totalPages - 1}
        >
          Next
        </button>
        <span className="ml-4 text-sm text-gray-700">
          Page {currentPage + 1} of {totalPages}
        </span>
      </div>
    );
  };

  return (
    <>
      <div className="mx-auto   py-6 px-8 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-16">
          {blogData.map((item, index) => (
            <Card
              key={index}
              imageSrc={urlFor(item.cardImage).url()}
              title={item.cardTitle}
              date={formatDate(item.date)}
              href={`news/${item._id}`}
            />
          ))}
        </div>
        {renderPagination()}
      </div>
    </>
  );
};

export default BlogPosts;
