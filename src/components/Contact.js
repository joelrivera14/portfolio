import "../blocks/Contact.css";
import validation from "./Validation";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import git from "../images/github.svg";
import linkdin from "../images/linkedin.svg";

export const Contact = () => {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9126wt7",
        "template_n6ih5vo",
        form.current,
        "4zf8BRzQnOu751oGT"
      )
      .then(
        (result) => {
          handleClearInput();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    setErrors(validation(values));
  };

  const handleClearInput = () => {
    setValues({ user_name: "", user_email: "", message: "" });
  };

  return (
    <div className="c">
      <div className="contact" onSubmit={sendEmail}>
        <form className="contact__form" ref={form}>
          <label className="contact__label">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="contact__input"
            value={values.user_name}
            minLength={4}
            required
            onChange={handleChange}
          />
          {errors.user_name && (
            <p className="contact__error">{errors.user_name}</p>
          )}
          <label className="contact__label">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="contact__input"
            required
            value={values.user_email}
            onChange={handleChange}
          />
          {errors.user_email && (
            <p className="contact__error">{errors.user_email}</p>
          )}
          <label className="contact__label ">Message</label>
          <textarea
            className="contact__textArea"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          />
          <input type="submit" value="Send" className="contact__submit" />
        </form>
        <div className="c__logo-holder">
          <a
            href="https://github.com/joelrivera14?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <img src={git} alt="git logo" className="contact__logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/joel-rivera-b85975258/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkdin} alt="linkdin logo" className="contact__logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
