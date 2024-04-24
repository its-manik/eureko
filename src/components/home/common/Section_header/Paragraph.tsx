import React, { ReactNode } from "react";

interface ParagraphProps {
  description: ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({ description }) => (
  <div className="pb-6 m-auto w-full flex justify-center md:w-4/5">
    <p className="text-center text-lg w-[80%]  text-white leading-relaxed">
      {description}
    </p>
  </div>
);
export default Paragraph;
