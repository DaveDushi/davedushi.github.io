import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const formRef = useRef(); // Create a reference to the form element

  useEffect(() => {
    emailjs.init("UGi6TWQyWE0oo-NPA");
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("default_service", "contact_form", formRef.current) // Pass the form element reference
      .then(() => {
        setFormData({
          user_name: "",
          user_email: "",
          message: "",
        });
        alert("Message Sent!");
      })
      .catch((e) => {
        console.log(e);
        alert("Couldn't send message. Please try again later.");
      });
  };

  return (
    <div
      id="contact"
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Contact Me</h2>
          <form ref={formRef} onSubmit={handleSubmit}>
            {" "}
            {/* Attach the reference to the form */}
            <div className="form-control">
              <input type="hidden" name="contact_number" value="1" />
              <label className="label" htmlFor="user_name">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="user_email">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label" htmlFor="message">
                <span className="label-text">Message</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
