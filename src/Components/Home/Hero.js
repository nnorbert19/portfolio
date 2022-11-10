import React, { useRef } from "react";
import "../../styles/hero.css";
import { Link } from "react-scroll";
import { motion, useInView } from "framer-motion";

function Hero() {
  const transition = {
    type: "spring",
    mass: 1,
    damping: 15,
    duration: 2,
    delay: "0.5",
  };
  const dropin = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { y: 0, opacity: 1, transition },
    exit: { y: "100vh", opacity: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref} className="hero center" id="home">
      <motion.h1
        variants={dropin}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center hero-text"
      >
        Hello, I'm Norbert <br /> Junior Front-end developer
      </motion.h1>
      <div className="justify-content-evenly flex-row d-flex w-75 mt-3">
        <motion.button
          variants={dropin}
          initial="exit"
          animate={isInView ? "visible" : "exit"}
          className="p-2 primary m-2"
        >
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
        </motion.button>
        <motion.button
          variants={dropin}
          initial="exit"
          animate={isInView ? "visible" : "exit"}
          className="p-2 secondary m-2"
        >
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
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
