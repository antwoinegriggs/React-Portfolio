import React from "react";
import "./contact.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import ContactForm from "../forms/contact-from.js";

export default function Contact(props) {
  return (
    <div id="contact">
      <header id="contact-header">
        <Header />
      </header>
      <main id="contact-main">
        <div id="contact-title">
          Thanks for taking the time to reach out. How can I help you today?
        </div>
        <div id="information">
          <ContactForm />
        </div>
      </main>
      <footer id="contact-footer">
        <Footer />
      </footer>
    </div>
  );
}
