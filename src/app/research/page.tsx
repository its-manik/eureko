import React from "react";
import ResearchInitialCards from "./researchcard/researchInitialCards";
import ChatbotResearch from "@/app/research/chatbot/chatbotResearch";
import HeroSection from "./heroSection";
function Research() {
  return (
    <div className="Research_page">
      <HeroSection />
      <div className="   py-6 m-auto md:px-0  ">
        <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-3xl md:text-center leading-7 lg:text-left md:text-5xl font-medium mb-4 text-white">
              Integrating AGI with Human Intelligence
            </h2>
            <p className="text-base text-left md:text-center  font-normal  lg:text-left text-white">
              Pioneering a Future Where Technology Meets Humanity
            </p>
          </div>
          <p className="text-lg  leading-relaxed tracking-wider text-white">
            At EUREKO, we are at the forefront of pioneering a future where
            Artificial General Intelligence (AGI) and human intelligence
            converge in harmony. Our research approach is distinctively
            characterized by a deep commitment to integrating AGI seamlessly
            with the nuances of human thought, creativity, and emotion. This
            unique focus reflects our dedication to not only advancing
            technology but also enriching the human experience.
          </p>
        </div>
      </div>
      <ResearchInitialCards />
      <div className="   py-6 m-auto md:px-0   border-t border-gray-300">
        <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between md:pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-2xl md:text-center leading-8 md:leading-10 lg:text-left md:text-3xl font-medium mb-0 md:mb-4 text-white">
              AI Solutions & Learning Advanced AI Solutions for Your Business
              Needs
            </h2>
          </div>
          <p className="text-lg  leading-relaxed  text-white">
            {`At EUREKO, we specialize in creating innovative Artificial General
            Intelligence (AGI) solutions tailored to enhance business operations
            and customer interactions. Our offerings are designed to seamlessly
            integrate with your business, ensuring efficiency, scalability, and
            a competitive edge in today's fast-paced digital world.`}
          </p>
        </div>
      </div>
      <div className="   py-6 m-auto md:px-0   border-t border-gray-300">
        <div className="grid grid-cols-1 px-8  lg:grid-cols-2 xl:grid-cols-2 gap-8 justify-between md:pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-2xl md:text-center leading-8 md:leading-10 lg:text-left md:text-3xl font-medium mb-0 md:mb-4 text-white">
              {``}
              <br />
              {`EUREKO's AI-Driven Chatbots:`}
              <br />
              Revolutionizing Customer Interaction
            </h2>
          </div>
        </div>
      </div>
      <ChatbotResearch />
    </div>
  );
}

export default Research;
