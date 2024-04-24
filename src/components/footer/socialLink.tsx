import Link from "next/link";
import React, { ReactNode, useState } from "react";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  icon: IconType;
  color: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon: Icon, color }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <li
      className=" duration-500 hover:scale-125 opacity-75 hover:opacity-100 transition-all rounded-full p-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={href} rel="noreferrer" target="_blank" className="">
        <Icon size={30} color={hovered ? color : "white"} />
      </Link>
    </li>
  );
};

export default SocialLink;
