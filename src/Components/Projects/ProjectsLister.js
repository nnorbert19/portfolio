import React, { useState, useRef } from "react";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { motion, useInView } from "framer-motion";

function ProjectsLister(value) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dropin = {
    hidden: { x: "-200vw", opacity: 0, blur: 10 },
    visible: { x: 0, opacity: 1, blur: 10 },
    exit: { x: "100vw", opacity: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <div ref={ref} className="align-items-stretch d-flex">
        <motion.div
          transition={{
            type: "spring",
            mass: 2,
            damping: 25,
          }}
          exit="exit"
          variants={dropin}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="align-items-stretch d-flex col"
        >
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
        </motion.div>
      </div>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{value.value.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {documentToReactComponents(value.value.text.json)}
          <img
            src={value.value.screenshot.url}
            className="w-100 modal-image"
          ></img>
        </Modal.Body>
        <Modal.Footer>
          <div>
            {value.value.link && (
              <button className="button">
                <a
                  href={value.value.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none modal-link p-3"
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
                className="text-decoration-none modal-link p-3"
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
