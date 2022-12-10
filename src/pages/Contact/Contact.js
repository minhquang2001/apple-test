import React, { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faFacebookF, faGithub, faGooglePlusG } from "@fortawesome/free-brands-svg-icons"
import classNames from "classnames/bind"
import emailjs from '@emailjs/browser';
import style from './Contact.module.scss'

const cx = classNames.bind(style)
function Contact() {

    const [data, setData] = useState({
        Name: '',
        Email: '',
        Textmessage: '',
    });
    const form = useRef()
    // const handleChange = (e) => {
    //     setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // };

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s1y6hnj', 'template_d595nvr', form.current, '1UHj-0TlcGw2KhRIC')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    console.log(data)
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
                        
                        // onChange={handleChange}
                         />
                    <FontAwesomeIcon icon={faUser} className={cx("fas", "fa-user")} />
                </div>
                <div className={cx("form-items")}>
                    <input
                        type="text"
                        className={cx("input")}
                        spellCheck="false"
                        placeholder="Email"
                        name="Email"
                        // onChange={handleChange} 
                        />
                    <FontAwesomeIcon icon={faEnvelope} className={cx("fas", "fa-envelope")} />
                </div>
                <div className={cx("form-items")}>
                    <textarea
                        className={cx("input", "message")}
                        spellCheck="false"
                        cols="30"
                        rows="10"
                        placeholder="Message....."
                        name="Textmessage"
                        // onChange={handleChange} 
                        >

                        </textarea>
                </div>
            </div>

            <button className={cx("btn")} type="submit" value="Send">
                Submit
                <FontAwesomeIcon icon={faArrowRight} className={cx("fas fa-arrow-right")} />
            </button>


            <div className={cx("social-icons")}>
                <div className={cx("facebook")}>
                    <a href='https://www.facebook.com/QuangCun2001' >
                        <FontAwesomeIcon className={cx('fab')} icon={faFacebookF} />
                    </a>
                </div>
                <div className={cx("twitter")}>
                    <a href="https://github.com/minhquang2001" >
                        <FontAwesomeIcon className={cx('fab')} icon={faGithub} />
                    </a>
                </div>
                <div className={cx("google")}>
                    <div mailto="mailto:quangcun1404@gmail.com" >
                        <FontAwesomeIcon className={cx('fab')} icon={faGooglePlusG} />
                    </div>
                </div>
            </div>
        </form>

    )
}

export default Contact