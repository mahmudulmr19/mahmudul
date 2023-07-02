"use client";
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "@/assets/about.jpg";
const About = () => {
  return (
    <Container className="mt-40" id="about">
      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-8 text-white">
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Image
            src={aboutImage}
            alt="Mahmudul Hasan"
            className="rounded w-full"
          />
        </motion.div>
        <motion.div
          className="lg:w-1/2 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="font-semibold text-xl lg:text-2xl">⚡ About Me</h2>
          <motion.p
            className="text-[#8f9094]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            I&apos;m Mahmudul Hasan, a 15-year-old web developer passionate
            about coding. I&apos;ve mastered HTML, CSS, JavaScript, React,
            Next.js, Node.js, Express.js, and more. I love creating visually
            appealing and interactive websites and constantly strive to enhance
            my skills.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-[#8f9094]"
            viewport={{ once: true }}
          >
            Despite my age, I&apos;m driven and committed to delivering
            high-quality web solutions. I believe in the transformative power of
            technology. With each project, I aim to create engaging user
            experiences and intuitive interfaces, always seeking new challenges.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-[#8f9094]"
            viewport={{ once: true }}
          >
            Continuous learning is key for me. I stay updated with the latest
            web technologies through courses and hands-on projects. Growth is
            essential for personal and professional development. If you have any
            questions or need web development assistance, feel free to reach
            out. I&apos;m here to help!
          </motion.p>
        </motion.div>
      </div>
    </Container>
  );
};

export default About;
