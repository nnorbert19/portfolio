import React, { useRef } from "react";
import ContactForm from "../Contact/ContactForm";
import ContactInformation from "../Contact/ContactInformation.js";
import { motion, useInView } from "framer-motion";

function ContactMe() {
  const dropin = {
    hidden: { x: "-100vw", opacity: 0, blur: 10 },
    visible: { x: 0, opacity: 1, blur: 10 },
    exit: { x: "100vw", opacity: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section ref={ref} className="center container" id="contact">
      <motion.div
        transition={{
          type: "spring",
          mass: 1,
          damping: 15,
          delay: "0.7",
          staggerChildren: 0,
          delayChildren: 0.3,
        }}
        exit="exit"
        variants={dropin}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="row w-100 h-100"
      >
        <ContactForm className="col-6" />
        <ContactInformation className="col-6" />
      </motion.div>
    </section>
  );
}

export default ContactMe;
