"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
          <Link href="/" onClick={() => setIsOpen(false)}>
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
            onClick={() => setIsOpen(false)}
            href="/#about"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            About
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#skills"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Skills
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#projects"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Projects
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            href="/#blogs"
            className="w-full block px-4 py-2 rounded hover:bg-gray-800 transition-all"
          >
            Blogs
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default Menu;
