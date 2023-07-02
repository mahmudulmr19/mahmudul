"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import Menu from "./Menu";
import { AiOutlineDownload } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 z-50 h-20 w-full border-b border-gray-100/10 bg-gray-900/40 backdrop-blur"
    >
      <Container className="flex items-center justify-between my-auto h-full text-[#f8fafc]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Mahmudul Hasan Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="hidden lg:flex items-center gap-10 text-gray-300 font-semibold">
          <Link href="/#about" className="hover:text-gray-200 transition-all">
            About
          </Link>
          <Link href="/#skills" className="hover:text-gray-200 transition-all">
            Skills
          </Link>
          <Link
            href="/#projects"
            className="hover:text-gray-200 transition-all"
          >
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-gray-200 transition-all">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <button className="bg-white px-4 py-1.5 text-gray-600 rounded text-sm font-medium hover:text-gray-800 transition-all inline-flex items-center gap-2">
            Resume <AiOutlineDownload />
          </button>
          <Menu />
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
