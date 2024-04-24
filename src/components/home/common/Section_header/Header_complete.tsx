import React, { ReactNode } from "react";
import Title from "./Title";
import Paragraph from "./Paragraph";

interface Header_Complete {
  description: ReactNode;
  title: string;
  className?:string
}

const Header_complete: React.FC<Header_Complete> = ({ title,className, description }) => (
  <>
    <Title text={title} className={className} />
    <Paragraph description={description} />
  </>
);

export default Header_complete;
