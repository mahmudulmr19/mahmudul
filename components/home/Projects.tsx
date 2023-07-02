"use client";
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <Container id="projects" className="mt-40">
      <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
        All Creative Works.
      </h2>
      <p className="text-[#8f9094]">
        Here&apos;s some of my projects that I have worked on.
      </p>
    </Container>
  );
};

export default Projects;
