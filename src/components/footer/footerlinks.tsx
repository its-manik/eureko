import Link from "next/link";
import React, { ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  children: ReactNode;
}

const footerlinks: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <Link
      href={href}
      className="text-white font-sans tracking-widest  hover:text-[15px]  transition "
    >
      {children}
    </Link>
  </li>
);
export default footerlinks;
