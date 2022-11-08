import React from "react";
import "../../styles/hero.css";
import { Link } from "react-scroll";

function Hero() {
  return (
    <section className="hero center" id="home">
      <h1 className="text-center hero-text">
        Hello, I'm Norbert <br /> Junior Front-end developer
      </h1>
      <div className="justify-content-evenly flex-row d-flex w-75 mt-3">
        <button className="p-2 primary m-2">
          <Link
            className="text-decoration-none text-nowrap"
            to="projects"
            spy={true}
            smooth={true}
            offset={-85}
            duration={200}
          >
            My works
          </Link>
        </button>
        <button className="p-2 secondary m-2">
          <Link
            className="text-decoration-none text-nowrap"
            to="contact"
            spy={true}
            smooth={true}
            offset={-85}
            duration={200}
          >
            Send a message{" "}
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Hero;
