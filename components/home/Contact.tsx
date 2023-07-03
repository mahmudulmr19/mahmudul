"use client";
import React, { FormEvent } from "react";
import Container from "./Container";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact: React.FC = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container id="contact" className="mt-40 pb-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Info and social links */}
        <div>
          <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
            Contact Me
          </h2>
          <p className="text-[#8f9094] mt-4">
            Feel free to reach out to me using the contact form or through the
            following channels:
          </p>
          <div className="mt-6">
            {/* Your information and social links */}
            <div className="text-white space-y-2">
              <div className="flex items-center">
                <FaEnvelope color="#3ccf91" className="mr-2" />
                <p>your-email@example.com</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt color="#3ccf91" className="mr-2" />
                <p>+1 123-456-7890</p>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
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
        </div>

        {/* Right side: Contact form */}
        <div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="space-y-2">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="space-y-2">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-2 resize-none bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  className="py-2 px-4 bg-[#3ccf91] text-white rounded hover:bg-[#29b47b] transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
