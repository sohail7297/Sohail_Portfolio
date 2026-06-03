import { useState } from "react";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {

  const [formData,setFormData] = useState({
    name:"",
    email:"",
    message:""
  });

  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]:e.target.value
    });
  };

  const sendEmail=(e)=>{
    e.preventDefault();

    emailjs.send(
      "service_n5pfpgh",
      "template_4adbfej",
      formData,
      "-jaXj4T4pNAD1X0qp"
    )
    .then(()=>{
      alert("Message Sent Successfully!");
    })
    .catch(()=>{
      alert("Failed To Send Message");
    });
  };

  return (

    <section
      id="contact"
      className="py-24 px-8 max-w-5xl mx-auto">

      <h2
        className="text-5xl font-bold text-center gold-text mb-12">

        Contact Me

      </h2>

      <form
        onSubmit={sendEmail}
        className="glass p-10 rounded-3xl">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-4 mb-4 bg-transparent border rounded-xl"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          className="w-full p-4 mb-4 bg-transparent border rounded-xl"
          required
        />

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          onChange={handleChange}
          className="w-full p-4 mb-6 bg-transparent border rounded-xl"
          required
        />

        <button
          type="submit"
          className="
          gradient-gold
          text-black
          px-8
          py-3
          rounded-full
          font-bold">

          Send Message

        </button>

      </form>

    </section>

  );

}