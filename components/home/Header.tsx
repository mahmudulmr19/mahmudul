import React from "react";
import Container from "./Container";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-20 w-full border-b border-gray-100/10 bg-gray-900/40 backdrop-blur">
      <Container className="flex items-center justify-between my-auto h-full text-[#f8fafc]">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Mahmudul Hasan Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="flex items-center gap-10 text-gray-300 text-sm font-medium">
          <Link href="/#about" className="hover:text-gray-200 transition-all">
            About
          </Link>
          <Link href="/#skills" className="hover:text-gray-200 transition-all">
            Skills
          </Link>
          <Link href="/#project" className="hover:text-gray-200 transition-all">
            Project
          </Link>
          <Link href="/#blogs" className="hover:text-gray-200 transition-all">
            Blogs
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/mahmudulmr19"
            target="_blank"
            className="rounded p-2 transition-colors text-gray-300 hover:text-gray-50"
          >
            <AiFillGithub className="w-6 h-6" />
          </Link>
          <Link
            href="/#contact"
            className="bg-white px-4 py-2 text-gray-600 rounded text-sm font-medium hover:text-gray-800 transition-all"
          >
            Lets talk
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
