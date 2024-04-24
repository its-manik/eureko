import React from "react";
import VisionCard from "./visionCard";
import VisionData from "./visiondata";

const Visioneurecko = () => {
  return (
    <div className="our_vision_eureko mx-auto py-8 ">
      <div className="container m-auto px-8 md:px-0 border-t border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-between pt-5">
          <div className="text-center md:text-left m-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white ">
              Our Vision at Eureko
            </h2>
            <p className="text-base leading-relaxed text-white">
              Our vision at Eureko is to create a future where Artificial
              General Intelligence (AGI) acts as a catalyst for unprecedented
              growth, innovation, and positive change. We envision a world where
              AGI not only complements human intelligence but also amplifies our
              potential to solve the most pressing global challenges.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {VisionData.map((vision, index) => (
              <VisionCard
                key={index}
                icon={vision.icon}
                title={vision.title}
                description={vision.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visioneurecko;
