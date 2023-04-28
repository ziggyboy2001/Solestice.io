import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion as m } from "framer-motion";
import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";

export const Contact = () => {
  const [showMessage, setShowMessage] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        //email service key
        "service_kv3npow",
        //email template key
        "template_tg9ezfm",
        form.current,
        //public key
        "RA0fC_0HO3ISywvpH"
      )
      .then(
        (result) => {
          console.log(result.text);

          setShowMessage(true);
        },
        (error) => {
          alert("something went wrong");
        }
      );
    // document.getElementById("contact-form").style.display = "none";
    // document.getElementById("success-message").style.display = "inline";
  };
  return (
    <div className="fullWrapper">
      <div className="formWrapper">
        <div className="wrapper">
          <h3 className="contactTitle">Contact</h3>
        </div>
        {/* <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.8, easy: "easyOut" }}
          className=""
          style={{ overflow: "hidden" }}
        > */}
        {showMessage ? (
          <div id="success-message">
            <h4>
              Thank you, <br /> I will get back to you as soon as possible! Have
              a wonderful day.
            </h4>
          </div>
        ) : (
          <div className="bodyWrapper">
            <div className="iconWrapper">
              <div className="div2">
                <PhoneIcon className="contactIcon" />
                <p className="">(770) 203-9091</p>
              </div>

              <div className="div2">
                <MapIcon className="contactIcon" />
                <p className="">Atlanta, Ga</p>
              </div>

              <div className="div2">
                <EnvelopeIcon className="contactIcon" />
                <p className="">brentpurkswork@gmail.com</p>
              </div>
            </div>
            <div className="Link">
              {/* <img
                src={require("./images/icon.png")}
                alt="foto"
                className="text-yellow-500 h-4 w-4 animate-pulse"
            /> */}
              <NavLink
                to="https://www.linkedin.com/in/brent-purks/"
                className=""
                target="_blank"
              >
                www.linkedin.com/in/brent-purks/
              </NavLink>
            </div>
            <div className="inputFormWrapper">
              <form
                className="Form"
                id="contact-form"
                ref={form}
                onSubmit={sendEmail}
              >
                <label className="">Name</label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Name"
                  className=""
                />
                <label className="">Email</label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="E-mail"
                  className=" "
                />
                <label className="">Message</label>
                <textarea rows="20" cols="40" name="message" className="" />
                <button
                  type="submit"
                  value="Send"
                  onClick={sendEmail}
                  className="sendBtn"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span> Send
                </button>
              </form>
            </div>
          </div>
        )}
        {/* </m.div> */}
      </div>
    </div>
  );
};
export default Contact;
