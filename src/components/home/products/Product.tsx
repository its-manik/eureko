"use client";
import React, { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanityClient";
import { ProductBlogPost } from "@/types";
import Header_complete from "@/components/home/common/Section_header/Header_complete";
import ProductCard from "@/app/product/productcard/productCard";

const ProductsSection: React.FC = () => {
  const [productBlogPosts, setProductBlogPosts] = useState<ProductBlogPost[]>(
    []
  );
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  useEffect(() => {
    client
      .fetch<ProductBlogPost[]>(
        `*[_type == "productBlogPost"]{
        "cardImage": mainImage.asset->url,
        _id,
        cardTitle,
        "date": date,
        "slug": slug.current
      }`
      )
      .then((data) => {
        setProductBlogPosts(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="md:px-8    border-t-[1px] border-gray-300 py-8">
      <Header_complete
        title="Products"
        description="We develop risk mitigation tools, best practices for responsible use, and monitor our platforms for misuse."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 md:px-0">
        {productBlogPosts.map(({ cardImage, cardTitle, _id, date }, index) => (
          <ProductCard
            key={_id}
            imageSrc={urlFor(cardImage).url()}
            title={cardTitle}
            date={formatDate(date)}
            classcardbg=""
            className={"min-h-60 object-fill max-h-60 overflow-hidden"}
            href={`product/${_id}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
