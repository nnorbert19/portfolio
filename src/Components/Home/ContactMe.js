import React from "react";
import ContactForm from "../Contact/ContactForm";
import ContactInformation from "../Contact/ContactInformation.js";

function ContactMe() {
  return (
    <section className="center container" id="contact">
      <div className="row w-100 h-100">
        <ContactForm className="col-6" />
        <ContactInformation className="col-6" />
      </div>
    </section>
  );
}

export default ContactMe;
