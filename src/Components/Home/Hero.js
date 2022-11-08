import React from "react";
import "../../styles/hero.css";

function Hero() {
  return (
    <div className="container center" id="home">
      <div className="hero center">
        <h1 className="text-center hero-text">
          Hello, I'm Norbert <br /> Junior Front-end developer
        </h1>
        <div className="justify-content-evenly flex-row d-flex w-75 mt-3">
          <button className="p-2 primary m-2">
            <a href="#projects" className="text-decoration-none">
              My works
            </a>
          </button>
          <button className="p-2 secondary m-2">
            <a href="#contact" class="text-decoration-none">
              Send a message
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
