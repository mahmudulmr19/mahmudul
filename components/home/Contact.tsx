"use client";
import React, { FormEvent, useState } from "react";
import Container from "./Container";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSendMessage, setEmailSendMessage] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setEmailSendMessage("");
    setEmailErrorMessage("");

    setLoading(true);
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (response.ok) {
        setEmailSendMessage("Email sent successfully!");
        setLoading(false);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      }
    } catch (error) {
      setEmailErrorMessage("Failed to send email");
      setLoading(false);
    }
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
                <p>mahmudulmr19@gmail.com</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt color="#3ccf91" className="mr-2" />
                <p>+8801602051672</p>
              </div>
              <div className="flex items-center text-lg">
                <MdLocationOn color="#3ccf91" className="mr-2" />
                <p>Rangpur District, Rangpur - 5400, Bangladesh</p>
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                  {loading ? (
                    <AiOutlineLoading3Quarters
                      className="animate-spin text-lg"
                      color="#fff"
                    />
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </div>
            <p className="text-green-500 mt-4">{emailSendMessage}</p>
            <p className="text-red-500 mt-4">{emailErrorMessage}</p>
          </form>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
