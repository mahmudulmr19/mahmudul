"use client";
import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-40"
      >
        <motion.div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-4 text-[#3ccf91] text-4xl font-semibold"
          >
            Hey there!, I&apos;m
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold text-white text-6xl"
          >
            Mahmudul Hasan
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-2xl mt-4 font-semibold text-gray-400 max-w-screen-sm mx-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="text-white"
            >
              Software Developer.
            </motion.span>{" "}
            A self-taught developer with an interest in Computer Science.
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="text-lg text-gray-400 mt-4"
          >
            🚀 Exploring opportunities and side projects.
            <br />
            💻 Currently specializing in{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-[#3ccf91]"
            >
              Front-end Development
            </motion.span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="mt-4 flex items-center justify-center gap-4"
          >
            <Link
              href="https://github.com/mahmudulmr19"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800/50 transition-all rounded text-white font-bold px-4 py-2"
            >
              <FaGithub color="#3ccf91" /> Github
            </Link>
            <Link
              href="https://www.linkedin.com/in/mahmudulmr19"
              target="_blank"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800/50 transition-all rounded text-white font-bold px-4 py-2"
            >
              <FaLinkedin color="#3ccf91" /> Linkedin
            </Link>
            <Link
              href="mailto:mahmudulmr19@gmail.com"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800/50 transition-all rounded text-white font-bold px-4 py-2"
            >
              <FaEnvelope color="#3ccf91" /> Email
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default Hero;
