"use client";

import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { skillsItem } from "@/constant";
import Image from "next/image";

const Skills = () => {
  return (
    <Container className="mt-40" id="skills">
      <motion.h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
        Skills
      </motion.h2>
      <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skillsItem.map((skill, index) => (
          <motion.li
            key={skill.name}
            className="rounded-lg flex flex-col items-center justify-center text-center bg-gray-900 border border-gray-600/50 text-white font-medium p-5 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-12 h-12 mb-2">
              <Image src={skill.icon} alt={skill.name} />
            </div>
            <div className="text-lg">{skill.name}</div>
          </motion.li>
        ))}
      </ul>
    </Container>
  );
};

export default Skills;
