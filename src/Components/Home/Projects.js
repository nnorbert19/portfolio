import React from "react";
import { useContenful } from "../../ContentfulContext";
import Row from "react-bootstrap/Row";
import ProjectsLister from "../Projects/ProjectsLister";
import "../../styles/projects.css";

function Projects() {
  const { projects } = useContenful();
  return (
    <section className="container" id="projects">
      <Row
        xs={1}
        sm={2}
        md={2}
        lg={3}
        xl={4}
        className="g-3 justify-content-center"
      >
        {projects.map((project, index) => (
          <ProjectsLister key={index} value={project} />
        ))}
      </Row>
    </section>
  );
}

export default Projects;
