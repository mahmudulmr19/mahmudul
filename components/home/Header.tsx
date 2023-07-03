"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Header: React.FC = () => {
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
    <header className="fixed top-0 z-50 h-20 w-full border-b border-gray-100/10 bg-gray-900/40 backdrop-blur">
      <Container className="flex items-center justify-between my-auto h-full text-[#f8fafc]">
        <Link href="/" onClick={() => window.scrollTo(0, 0)}>
          <Image
            src="/logo.svg"
            alt="Mahmudul Hasan Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-gray-300 font-semibold">
          <motion.a
            href="#about"
            onClick={(e) => handleScrollToSection(e, "#about")}
            className="hover:text-gray-200 transition-all"
          >
            About
          </motion.a>
          <motion.a
            href="#skills"
            onClick={(e) => handleScrollToSection(e, "#skills")}
            className="hover:text-gray-200 transition-all"
          >
            Skills
          </motion.a>
          <motion.a
            href="#projects"
            onClick={(e) => handleScrollToSection(e, "#projects")}
            className="hover:text-gray-200 transition-all"
          >
            Projects
          </motion.a>
          <motion.a
            href="#contact"
            onClick={(e) => handleScrollToSection(e, "#contact")}
            className="hover:text-gray-200 transition-all"
          >
            Contact
          </motion.a>
        </div>
        <div className="flex items-center">
          <motion.a
            href="/Resume.pdf"
            download="Mahmudul Hasan Resume"
            className="bg-white px-4 py-1.5 text-gray-600 rounded text-sm font-medium hover:text-gray-800 transition-all inline-flex items-center gap-2"
          >
            Resume <AiOutlineDownload />
          </motion.a>
          <Menu />
        </div>
      </Container>
    </header>
  );
};

export default Header;
