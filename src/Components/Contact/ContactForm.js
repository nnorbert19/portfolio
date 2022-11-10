import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import Form from "react-bootstrap/Form";
import "react-toastify/dist/ReactToastify.min.css";
import { toast, ToastContainer } from "react-toastify";
import "../../styles/contact.css";

function ContactForm() {
  emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
  const [loading, setLoading] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE,
        e.target,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("E-mail sent successfully.", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          setLoading(false);
        },
        (error) => {
          console.log(error);
          toast.error(
            `Something went wrong. Try again later. error: ${error}`,
            {
              position: "bottom-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          setLoading(false);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div className="form col-12 col-lg-7 col-md-7 col-xl-7 col-xxl-7">
        <h3 className="center m-3 title">Get in touch</h3>
        <Form onSubmit={handleSubmit} className="m-3 row">
          <Form.Group className="mb-5 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Form.Control
              type="text"
              name="from_name"
              id="from_name"
              placeholder="Name*"
              required
            />
            <div className="invalid-feedback">Please choose a username.</div>
          </Form.Group>
          <Form.Group className="mb-5 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Form.Control
              type="email"
              name="from_email"
              id="from_email"
              placeholder="E-mail address*"
              required
            />
          </Form.Group>
          <Form.Group className="mb-5 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Form.Control
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
            />
          </Form.Group>
          <Form.Group className="mb-5 col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <Form.Control
              type="phone"
              name="from_phone"
              id="from_phone"
              placeholder="Phone number"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              name="message"
              id="message"
              placeholder="Message*"
              required
            />
          </Form.Group>
          <Form.Group className="center">
            <button
              type="submit"
              value="Send"
              disabled={loading}
              className="button px-2"
            >
              Send
            </button>
          </Form.Group>
        </Form>
        <ToastContainer />
      </div>
    </>
  );
}

export default ContactForm;
