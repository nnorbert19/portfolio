import React from "react";
import { Card, Col } from "react-bootstrap";

function ProjectsLister(value) {
  return (
    <>
      <Col className="align-items-stretch d-flex">
        <Card className="h-100">
          <Card.Img src={value.value.screenshot.url}></Card.Img>
          <Card.Title className="m-2">{value.value.title}</Card.Title>
          <Card.Body>
            <p>{value.value.shortText}</p>
          </Card.Body>
          <Card.Footer className="mt-auto justify-content-center d-flex">
            <button className="p-2 button m-2">
              <a href="#projects" className="text-decoration-none">
                More information
              </a>
            </button>
          </Card.Footer>
        </Card>
      </Col>
    </>
  );
}

export default ProjectsLister;
