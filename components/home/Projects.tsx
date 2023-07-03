"use client";
import React from "react";
import Container from "./Container";
import { motion } from "framer-motion";
import { projectItem } from "@/constant";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { BiSolidLockAlt } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <Container id="projects" className="mt-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
          All Creative Works.
        </h2>
        <p className="text-[#8f9094]">
          Here&apos;s some of my projects that I have worked on.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
        {projectItem.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            key={project.id}
            className="bg-[#080808] border border-gray-500/10 rounded"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full h-auto rounded-t"
            />
            <div className="flex flex-col p-4 gap-1.5">
              <div className="flex flex-row items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{project.title}</h3>
                </div>
                <div className="flex flex-row gap-2 text-lg items-center">
                  {project.hasGithubLink ? (
                    <Link
                      className="text-white  transition-all hover:text-[#3ccf91]"
                      href={project.githubLink}
                      target="_blank"
                    >
                      <FaGithub />
                    </Link>
                  ) : (
                    <BiSolidLockAlt
                      className="text-white"
                      title="This is a private project, and the GitHub source code is unavailable"
                    />
                  )}
                  <Link
                    className="text-white  transition-all hover:text-[#3ccf91]"
                    href={project.link}
                    target="_blank"
                  >
                    <FiExternalLink />
                  </Link>
                </div>
              </div>

              {/* bottom */}
              <div className="text-[#8f9094]">
                <div className="border-t border-gray-500/10" />
                <p className="mt-1 text-sm">{project.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  );
};

export default Projects;
