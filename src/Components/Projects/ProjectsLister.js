import React, { useState } from "react";
import { Card, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ProjectsLister(value) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
            <button onClick={handleShow} className="p-2 button m-2">
              More information
            </button>
          </Card.Footer>
        </Card>
      </Col>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{value.value.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={value.value.screenshot.url}
            className="w-25 modal-image"
          ></img>
          {documentToReactComponents(value.value.text.json)}
        </Modal.Body>
        <Modal.Footer>
          <div>
            {value.value.link && (
              <button className="button">
                <a
                  href={value.value.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none modal-link"
                >
                  See the challenge
                </a>
              </button>
            )}
          </div>
          <div>
            <button className="button">
              <a
                href={value.value.linkToLive}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none modal-link"
              >
                Live site
              </a>
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectsLister;
