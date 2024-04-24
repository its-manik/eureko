import React from "react";

interface TitleProps {
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ text, className }) => (
  <h2
    className={`text-4xl font-bold mb-4 text-white ${className} text-center`}
  >
    {text}
  </h2>
);

export default Title;
