"use client";
import React from "react";
import Container from "./Container";

const Contact = () => {
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <Container id="contact" className="mt-40">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="text-white">
              <p>Mahmudul Hasan</p>
              <p>Web Developer</p>
              <p>Email: your-email@example.com</p>
              <p>Phone: +1 123-456-7890</p>
            </div>
            <div className="flex space-x-4 mt-4">
              {/* Social links */}
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all hover:text-[#3ccf91]"
              >
                Github
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all hover:text-[#3ccf91]"
              >
                LinkedIn
              </a>
              <a
                href="mailto:your-email@example.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-all hover:text-[#3ccf91]"
              >
                Email
              </a>
            </div>
          </div>
        </div>

        {/* Right side: Contact form */}
        <div>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-white">
                  Name
                </label>
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
                <label htmlFor="email" className="text-white">
                  Email
                </label>
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
                <label htmlFor="message" className="text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-[#3ccf91] text-white"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <div>
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
