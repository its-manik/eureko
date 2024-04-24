import React from "react";
import NewsCard from "@/components/crad";
import heroimg1 from "@/images/iStock-1162261469.jpg";
import heroimg2 from "@/images/iStock-1395304859.jpg";

const MainComponent: React.FC = () => {
  return (
    <div className="container mx-auto py-8 ">
      <div className="pt-5 border-t border-gray-300">
        <div className="container mx-auto  px-8 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="mb-5">
              <h2 className="text-xl md:text-3xl text-white font-bold ">
                Latest updates
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  px-8 md:px-0">
        <NewsCard
          imageSrc={heroimg1}
          title="Superalignment Fast Grants"
          date="Dec 14, 2023"
          classcardbg={"bg-gray-100"}
        />
        <NewsCard imageSrc={heroimg2} title="Card Title" date="Dec 13, 2023" classcardbg={"bg-gray-100"} />
        <NewsCard imageSrc={heroimg2} title="Card Title" date="Dec 12, 2023" classcardbg={"bg-gray-100"} />
        <NewsCard imageSrc={heroimg2} title="Card Title" date="Dec 11, 2023" classcardbg={"bg-gray-100"} />
      </div>
    </div>
  );
};

export default MainComponent;
