import React from "react";
import Hero from "../Components/Home/Hero";
import AboutMe from "../Components/Home/AboutMe";
import Projects from "../Components/Home/Projects";
import ContactMe from "../Components/Home/ContactMe";

function Home() {
  return (
    <div className="w-100 center">
      <Hero />
      <hr className="w-100" />
      <AboutMe />
      <hr className="w-100" />
      <Projects />
      <hr className="w-100" />
      <ContactMe />
    </div>
  );
}

export default Home;
