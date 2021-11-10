import React from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />

      <div id="contact-container" className="container">
      <div id="contact-hero-image" alt="Man writing on paper" />
        <h1 id="contact-hero-title">Send us a message</h1>
        <form id="contact-form">
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputName">Name</label>
              <input type="email" class="form-control" id="inputName" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail">Email</label>
              <input type="text" class="form-control" id="inputEmail" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputPhone">Phone Number</label>
              <input type="text" class="form-control" id="inputPhone" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputMessage">Message</label>
              <textarea
                type="text"
                class="form-control"
                id="inputMessage"
                style={{ resize: "none", minHeight: "150px" }}
              />
            </div>
          </div>
          <button
            id="contact-send-button"
            type="submit"
            class="btn btn-success"
          >
            Send
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
