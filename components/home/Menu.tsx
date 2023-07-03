"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const header = document.querySelector("header");
      if (header) {
        const { height } = header.getBoundingClientRect();
        setHeaderHeight(height);
      }
    };

    // Update header height on component mount and window resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();

    const section = document.querySelector(sectionId);
    if (section) {
      const { top } = section.getBoundingClientRect();
      window.scrollTo({
        top: top + window.pageYOffset - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden text-xl cursor-pointer ml-5"
      >
        <AiOutlineMenu />
      </button>

      <Drawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        direction="right"
        className="lg:hidden"
        lockBackgroundScroll
        overlayColor="#111827"
        style={{
          backgroundColor: "#111827",
        }}
      >
        <div className="p-5 flex items-center justify-between border-b border-gray-600/70">
          <Link
            href="/"
            onClick={() => {
              setIsOpen(false);
              window.scrollTo(0, 0);
            }}
          >
            <Image
              src="/logo.svg"
              alt="Mahmudul Hasan Logo"
              width={40}
              height={40}
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-xl cursor-pointer ml-5"
          >
            <AiOutlineClose />
          </button>
        </div>
        <div className="p-5 transition-all flex flex-col gap-3">
          <Link
            onClick={(e) => {
              setIsOpen(false);
              handleScrollToSection(e, "#about");
            }}
            href="/#about"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            About
          </Link>
          <Link
            onClick={(e) => {
              setIsOpen(false);
              handleScrollToSection(e, "#skills");
            }}
            href="/#skills"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Skills
          </Link>
          <Link
            onClick={(e) => {
              setIsOpen(false);
              handleScrollToSection(e, "#projects");
            }}
            href="/#projects"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Projects
          </Link>
          <Link
            onClick={(e) => {
              setIsOpen(false);
              handleScrollToSection(e, "#contact");
            }}
            href="/#contact"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Contact
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
