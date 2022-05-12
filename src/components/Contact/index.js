import "./index.scss";
import React from "react";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-page-container">
        <h1>Contact me:</h1>
        <h2>psjcode@gmail.com</h2>
      </div>
      <div className="contact-form">
        <form>
          <ul>
            <li className="half-width">
              <input type="text" name="name" placeholder="Name" required/>
            </li>
            <li className="half-width">
              <input type="email" name= "email" placeholder="Email" required/>
            </li>
            <li>
              <input type="text" name="subject" placeholder="Subject" required/>
            </li>
            <li>
              <textarea name="message" placeholder="Message" required />
            </li>
            <li>
              <input type="submit" className="contact-send" value="SEND" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;
