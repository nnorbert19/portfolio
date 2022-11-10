import React, { useEffect, useRef } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "../../styles/aboutme.css";
import AboutMeComponent from "../About/AboutMeComponent";
import MyHobbies from "../About/MyHobbiesComponent";
import MySkills from "../About/MySkillsComponent";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function AboutMe() {
  const dropin = {
    hidden: { x: "-100vw", opacity: 0, blur: 10 },
    visible: { x: 0, opacity: 1, blur: 10 },
    exit: { x: "100vw", opacity: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="center my-5 about" id="about">
      <motion.div
        transition={{
          type: "spring",
          mass: 1,
          damping: 15,
          delay: "0.7",
        }}
        exit="exit"
        variants={dropin}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="center tabs w-100"
      >
        <Tabs defaultActiveKey="aboutme" id="tabs" className="w-100" fill>
          <Tab eventKey="aboutme" title="About me" className="m-4">
            <AboutMeComponent />
          </Tab>
          <Tab eventKey="myskills" title="My skills" className="m-4">
            <MySkills />
          </Tab>
          <Tab eventKey="myhobbies" title="My hobbies" className="m-4">
            <MyHobbies />
          </Tab>
        </Tabs>
      </motion.div>
    </section>
  );
}

export default AboutMe;
