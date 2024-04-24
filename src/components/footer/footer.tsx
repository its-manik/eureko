"use client";
import logo from "@/app/logo.png";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import SocialLink from "./socialLink";
import Footerlinks from "./footerlinks";
import Link from "next/link";
import { client } from "@/lib/sanityClient";
import { useState, useEffect } from "react";

interface Links {
  title: string;
  url: string;
}

interface Section {
  heading: string;
  links: Links[];
}
const Footer: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([]);
  const [socialLinks, setSocialLinks] = useState<any>([]);
  console.log(socialLinks, "socialLinks");
  const fetchFooterSections = async () => {
    const query = `
    *[_type == "footerlinks"]{
      heading,
      "links": links[]{
        title,
        url
      }
    }
  `;
    const data = await client.fetch(query);
    return data.reverse();
  };
  const fetchSocialLinks = async () => {
    const query = `
    *[_type == "footersocialLink"]{
      Linkedin,
      Twitter,
      Youtube,
      Github,
    }
  `;
    const data = await client.fetch(query);
    console.log(data, "fetchSocialLinks");
    return data;
  };

  useEffect(() => {
    fetchFooterSections().then(setSections);
    fetchSocialLinks().then(setSocialLinks);
  }, []);

  return (
    <footer className="Footer border-t border-[#1a1a1a] ">
      <div className="mx-auto max-w-screen-xl   px-4 py-16  sm:px-6 lg:space-y-8 lg:px-8  ">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
          <div>
            <div className="">
              <Link href={"/"}>
                <Image src={logo} alt="" width={80} height={42} />
              </Link>
            </div>

            <div className="mt-4">
              <ul className="flex gap-x-2">
                <SocialLink
                  href={socialLinks[0]?.Youtube ? socialLinks[0]?.Youtube : ""}
                  icon={FaYoutube}
                  color="red"
                />
                <SocialLink
                  href={socialLinks[0]?.Twitter ? socialLinks[0]?.Twitter : ""}
                  icon={RiTwitterXLine}
                  color="black"
                />
                <SocialLink
                  href={
                    socialLinks[0]?.Linkedin ? socialLinks[0]?.Linkedin : ""
                  }
                  icon={FaLinkedinIn}
                  color="#007FFF"
                />
                <SocialLink
                  href={socialLinks[0]?.Github ? socialLinks[0]?.Github : ""}
                  icon={FaGithub}
                  color="black"
                />
              </ul>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            {sections.map((section, index) => (
              <div key={index}>
                <p className="font-medium text-white">{section.heading}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {section?.links?.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className="text-white font-sans tracking-widest hover:text-[15px] transition"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex py-3 flex-wrap bg-[#141414] justify-between items-center text-align-center  px-4 sm:px-6 lg:px-16 ">
        <div className="text-xs  text-white tracking-wider font-sans ">
          &copy; Eureko 2024 All rights reserved.
        </div>
        <div>
          <ul className=" text-sm flex gap-x-5">
            <Footerlinks href="/privacy-policy">Privacy policy </Footerlinks>
            <Footerlinks href="/termsConditions">
              Terms & Conditions
            </Footerlinks>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
