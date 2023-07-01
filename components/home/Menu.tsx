"use client";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden text-xl cursor-pointer ml-5">
        <AiOutlineMenu />
      </div>
    </>
  );
};

export default Menu;
