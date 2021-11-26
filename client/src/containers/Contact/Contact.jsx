import React, {useState} from "react";
import "./Contact.css";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState("Send");
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // INPUT FORM STATE CHANGE FUNCTION
  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const submitEmail = async (e) => {
    e.preventDefault();
    setSubmitStatus("Sending...");
    await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
    .then((res) => res.json())
    .then(async (res) => {
      const resData = await res;
      if(resData.status === "success") {
        alert("Message Sent!");
      } else if (resData.status === "fail") {
        alert("Message failed to send!")
      }
    })
    .then(() => {
      setMailerState({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setSubmitStatus("Send");
    });
  }

  return (
    <>
      <Navbar />
      <div id="contact-container" className="container">
        <div id="contact-hero-image" alt="Man writing on paper" />
        <h1 id="contact-hero-title">Send us a message</h1>
        <form id="contact-form" onSubmit={submitEmail}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputName">Name*</label>
              <input required type="text" className="form-control" id="inputName" name="name" onChange={handleStateChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail">Email*</label>
              <input required type="email" className="form-control" id="inputEmail" name="email" onChange={handleStateChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputPhone">Phone Number</label>
              <input type="text" className="form-control" id="inputPhone" name="phone" onChange={handleStateChange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputMessage">Message*</label>
              <textarea
                required
                type="text"
                className="form-control"
                id="inputMessage"
                name="message"
                onChange={handleStateChange}
                style={{ resize: "none", minHeight: "150px" }}
              />
            </div>
          </div>
          <button
            id="contact-send-button"
            type="submit"
            className="btn btn-success"
          >
            {submitStatus}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
