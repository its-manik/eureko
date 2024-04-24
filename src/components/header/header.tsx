"use client";

import React, { Fragment, useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { client } from "@/lib/sanityClient";
import logo from "@/app/logo.png";
import logoSM from "../../../public/logo/Colorlogo.png";
import logoBlack from "../../../public/logo/Colorlogo.png";
import { addUserToWaitlist } from "@/actions/waitlist/waitlist.action";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

interface NavigationItem {
  name: string;
  href: string;
}

const navigation: NavigationItem[] = [
  { name: "Research", href: "/research" },
  { name: "Products", href: "/product" },
  { name: "Company", href: "/company" },
  { name: "News", href: "/news" },
];

interface ModalData {
  title?: string;
  subtitle?: string;
  description?: string;
  emailInputPlaceholder?: string;
  joinWaitlistButton?: string;
  AnnouncementText?: string;
  AnnouncementMoreDetailsButton?: string;
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isclosepopup, setIsclosepopup] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);
  const [email, setEmail] = useState<string>("");
  const [navbar, setNavbar] = useState(false);

  const router = useRouter();

  const addUserToDB = async () => {
    await addUserToWaitlist(email);
    toast.success("You have been added to the waitlist!");
  };

  useEffect(() => {
    const query = `
      *[_type == "modal"][0] {
        title,
        subtitle,
        description,
        emailInputPlaceholder,
        joinWaitlistButton,
        AnnouncementText,
        AnnouncementMoreDetailsButton
      }
    `;

    client
      .fetch(query)
      .then((data) => {
        setModalData(data);
      })
      .catch(console.error);
  }, []);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const handleNavLinkClick = () => {
    setMobileMenuOpen(false);
  };
  function closePopup(event: any) {
    setIsclosepopup(false);
  }

  function openPopup() {
    setMobileMenuOpen(false);
    setIsclosepopup(true);
  }

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  return (
    <div className="bg-white">
      {/* <header className="absolute inset-x-0 top-0 z-50"> */}
      <header
        className={
          navbar
            ? "fixed inset-x-0 top-0 z-50 bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow"
            : "absolute inset-x-0 top-0 z-50 bg-transparent"
        }
      >
        <nav
          className="flex items-center justify-between p-2 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src={navbar ? logoBlack : logo}
                alt="Logo"
                className="object-cover"
                width={navbar ? 70 : 80}
                height={45}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-9 w-9"
                aria-hidden="true"
                color={navbar ? "#ffffff" : "#ffffff"}
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavLinkClick}
                className={
                  navbar
                    ? "text-lg font-medium  text-white tracking-wider"
                    : "text-lg font-medium  text-white tracking-wider"
                }
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href={"https://eureko.ai/"}
              // onClick={(e) => {
              //   e.preventDefault();
              //   openPopup();
              //   handleNavLinkClick();
              // }}
              className={`space-x-6 justify-center font-medium transition-all delay-75 tracking-wide rounded-full ui-link group f-ui-1 pt-2 pb-2 px-6 relative ui-link--inherit lg:flex hidden border py-2  ${
                navbar
                  ? "bg-[#418279]  text-white"
                  : "hover:bg-[#418279] bg-transparent text-white"
              }`}
            >
              <span className="flex items-center">{"Try Eureko"}</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-[5]" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src={navbar ? logoBlack : logo}
                  alt="Logo"
                  className="object-cover"
                  width={navbar ? 70 : 80}
                  height={45}
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-9 w-9 " aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={handleNavLinkClick}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="https://chat.eureko.ai/"
                    // onClick={openPopup}
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900  hover:bg-[#418279] hover:bg-opacity-30"
                  >
                    {"Try Eureko"}
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <Transition appear show={isclosepopup} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          open={isclosepopup}
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/55 backdrop-blur-lg" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="fixed inset-0 z-50 overflow-auto flex justify-center items-center bg-gray-900 backdrop-blur-3xl ">
                  <div className="p-0.5 mt-[225px] sm:mt-[100px] rounded-2xl">
                    <div
                      className="relative z-10 bg-opacity-30 p-6 md:p-12 rounded-2xl max-w-3xl mx-4 shadow-xl"
                      style={{
                        background:
                          "radial-gradient(#306059, #000000)",
                      }}
                    >
                      <button
                        onClick={closePopup}
                        className="absolute top-0 right-0 mt-4 mr-4 text-white transition duration-200"
                      >
                        <XMarkIcon className="h-9 w-9" aria-hidden="true" />
                      </button>
                      <h1
                        className="text-lg md:text-xl font-medium text-center mt-5 sm:mt-0 mb-3 sm:mb-6"
                        style={{ color: "#dafe71" }}
                      >
                        🔥 {modalData?.title}
                      </h1>
                      <h2
                        className="text-md md:text-4xl font-bold text-center mb-6"
                        style={{
                          background:
                            "linear-gradient(to right, #dafe71, #e7fea4)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {modalData?.subtitle}
                      </h2>
                      <p
                        className="text-md md:text-md text-center mb-6 mx-auto w-full md:w-[80%]"
                        style={{ color: "#ffffff" }}
                      >
                        {modalData?.description}
                      </p>
                      <form className="flex flex-col md:flex-row justify-center items-center gap-4 mb-6 w-full md:w-[70%] mx-auto">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={modalData?.emailInputPlaceholder}
                          className="flex-grow p-2 md:text-md rounded focus:outline-none focus:ring-2 w-full md:w-[250px]"
                          style={{
                            borderColor: "#418279",
                            backgroundColor: "#ffffff",
                            color: "#1f3e39",
                          }}
                        />
                        <button
                          onClick={async () => {
                            await addUserToDB();
                            closePopup(event);
                          }}
                          className="p-2 text-nowrap px-3 rounded transition duration-200 md:text-md w-full md:w-auto"
                          style={{
                            backgroundColor: "#418279",
                            color: "#ffffff",
                          }}
                        >
                          {modalData?.joinWaitlistButton}
                        </button>
                      </form>
                      <div
                        className="flex flex-wrap justify-center space-y-4 sm:flex-nowrap sm:justify-between sm:space-y-0 items-center p-4 rounded-lg"
                        style={{ backgroundColor: "#ffffff", color: "#1f3e39" }}
                      >
                        <p className="text-sm md:text-md">
                          {modalData?.AnnouncementText}
                        </p>
                        <button
                          onClick={() => {
                            closePopup(event);
                            router.push("/company");
                          }}
                          className="sm:ml-4 py-2 w-full sm:w-auto  text-nowrap px-4 rounded transition duration-200 text-sm md:text-md"
                          style={{
                            backgroundColor: "#dafe71",
                            color: "#1f3e39",
                          }}
                        >
                          {modalData?.AnnouncementMoreDetailsButton}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Toaster position="top-center" />
    </div>
  );
}
