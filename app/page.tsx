import React from "react";
import {
  About,
  Contact,
  Header,
  Hero,
  Projects,
  Skills,
} from "@/components/home";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
