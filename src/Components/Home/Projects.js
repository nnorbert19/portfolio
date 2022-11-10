import React, { useRef } from "react";
import { useContenful } from "../../ContentfulContext";
import Row from "react-bootstrap/Row";
import ProjectsLister from "../Projects/ProjectsLister";
import "../../styles/projects.css";
import { motion, useInView } from "framer-motion";

function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dropin = {
    hidden: { x: "-200vw", opacity: 0, blur: 10 },
    visible: { x: 0, opacity: 1, blur: 10 },
    exit: { x: "100vw", opacity: 0 },
  };
  const { projects } = useContenful();
  return (
    <section ref={ref} className="container" id="projects">
      <div
        transition={{
          type: "spring",
          mass: 0.4,
          damping: 8,
          delay: "2",
        }}
        exit="hidden"
        variants={dropin}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
      >
        <motion.div
          transition={{
            type: "spring",
            mass: 1,
            damping: 15,
            delay: "0.2",
            staggerChildren: 1,
            delayChildren: 1,
          }}
          exit="exit"
          variants={dropin}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="g-3 row row-cols-xs-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-4 justify-content-center"
        >
          {projects.map((project, index) => (
            <ProjectsLister key={index} value={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
