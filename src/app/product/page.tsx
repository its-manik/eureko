import React from "react";
import ChatbotProduct from "./chatbot/chatbotProduct";
import ProductsSection from "./productcard/productsSection";
import HeroSection from "./heroSection";

const page = () => {
  return (
    <div className="Product_page">
      <HeroSection />
      <div className="  py-6 md:py-12 m-auto md:px-0  ">
        <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-3xl md:text-center  lg:text-left md:text-5xl font-medium mb-4 text-white">
              Developing safe & responsible AI
            </h2>
          </div>
          <p className="text-lg  leading-relaxed text-white ">
            {` Developing safe and responsible AI involves creating intelligent systems that make ethical decisions, 
respect privacy, and ensure transparency and fairness. This process necessitates ongoing collaboration between technologists, ethicists, and policymakers to align AI's capabilities with human values and societal norms..`}
          </p>
        </div>
      </div>
      <div className="   py-6 m-auto md:px-0   border-t border-gray-300">
        <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-2xl md:text-center leading-8 md:leading-10 lg:text-left md:text-3xl font-medium mb-0 md:mb-4 text-white">
              AI systems are becoming a part of everyday life. The key is to
              ensure that these machines are aligned with human intentions and
              values.
            </h2>
          </div>
        </div>
      </div>
      <ChatbotProduct />
      <ProductsSection />
    </div>
  );
};

export default page;
