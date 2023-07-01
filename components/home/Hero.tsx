import React from "react";
import Container from "./Container";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  return (
    <Container className="mt-40">
      <div className="text-center">
        <h1 className="mb-4 text-[#3ccf91] text-4xl font-semibold">
          Hey there!, I&apos;m
        </h1>
        <h2 className="font-bold text-white text-6xl">Mahmudul Hasan</h2>
        <h3 className="text-2xl mt-4 font-semibold text-gray-400 max-w-screen-sm mx-auto">
          <span className="text-white">Software Developer.</span> A self-taught
          developer with an interest in Computer Science.
        </h3>
        <p className="text-lg text-gray-400 mt-4">
          🚀 Exploring opportunities and side projects.
          <br />
          💻 Currently specializing in{" "}
          <span className="text-[#3ccf91]">Front-end Development</span>.
        </p>

        <div className="mt-4 flex items-center justify-center gap-4">
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
        </div>
      </div>
    </Container>
  );
};

export default Hero;
