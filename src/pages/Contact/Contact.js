import React, { useRef, useState, useEffect } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGithub,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import classNames from "classnames/bind";
import emailjs from "@emailjs/browser";

import style from "./Contact.module.scss";

const cx = classNames.bind(style);
function Contact() {
  const initialValues = { Name: "", Email: "", Text: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_s1y6hnj",
          "template_d595nvr",
          form.current,
          "1UHj-0TlcGw2KhRIC"
        )
        .then(
          (result) => {
            setFormValues(initialValues);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Success",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            console.log(result.text);
          },
          (error) => {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              showConfirmButton: false,
              timer: 1500,
              timerProgressBar: true,
            });
            console.log(error.text);
          }
        );
    } else {
      console.log("error");
    }
    // eslint-disable-next-line
  }, [formErrors]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.Name) {
      errors.Name = "Name is required!";
    }
    if (!values.Email) {
      errors.Email = "Email is required!";
    } else if (!regex.test(values.Email)) {
      errors.Email = "This is not a valid email format!";
    }
    if (!values.Text) {
      errors.Text = "Text is required!";
    }
    return errors;
  };
  return (
    <form ref={form} onSubmit={sendEmail} className={cx("contact-us")}>
      <div className={cx("title")}>
        <h1>Contact us</h1>
      </div>
      <div className={cx("form")}>
        <div className={cx("form-items")}>
          <input
            type="text"
            className={cx("input")}
            spellCheck="false"
            placeholder="Name"
            name="Name"
            value={formValues.Name}
            onChange={handleChange}
          />

          <FontAwesomeIcon icon={faUser} className={cx("fas", "fa-user")} />
          <p>{formErrors.Name}</p>
        </div>
        <div className={cx("form-items")}>
          <input
            type="text"
            className={cx("input")}
            spellCheck="false"
            placeholder="Email"
            name="Email"
            value={formValues.Email}
            onChange={handleChange}
          />

          <FontAwesomeIcon
            icon={faEnvelope}
            className={cx("fas", "fa-envelope")}
          />
          <p>{formErrors.Email}</p>
        </div>
        <div className={cx("form-items")}>
          <textarea
            className={cx("input", "message")}
            spellCheck="false"
            cols="30"
            rows="10"
            placeholder="Message....."
            name="Text"
            value={formValues.Text}
            onChange={handleChange}
          ></textarea>
          <p>{formErrors.Text}</p>
        </div>
      </div>

      <button className={cx("btn")} type="submit" value="Send">
        Submit
        <FontAwesomeIcon
          icon={faArrowRight}
          className={cx("fas", "fa-arrow-right")}
        />
      </button>

      <div className={cx("social-icons")}>
        <div className={cx("facebook")}>
          <a href="https://www.facebook.com/QuangCun2001">
            <FontAwesomeIcon className={cx("fab")} icon={faFacebookF} />
          </a>
        </div>
        <div className={cx("twitter")}>
          <a href="https://github.com/minhquang2001">
            <FontAwesomeIcon className={cx("fab")} icon={faGithub} />
          </a>
        </div>
        <div className={cx("google")}>
          <div mailto="mailto:quangcun1404@gmail.com">
            <FontAwesomeIcon className={cx("fab")} icon={faGooglePlusG} />
          </div>
        </div>
      </div>
    </form>
  );
}

export default Contact;
