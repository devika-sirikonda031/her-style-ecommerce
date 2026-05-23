import "../styles/Contact.css";

function Contact() {

  return (

    <div className="contact-page">

      <div className="contact-hero">

        <h1>Contact Us</h1>

        <p>
          We would love to hear from you ✨
        </p>

      </div>

      <div className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions about our collections,
            orders or fashion styles?
          </p>

          <div className="info-box">
            <h3>Email</h3>
            <p>herstyle@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>
            <p>+91 9876543210</p>
          </div>

          <div className="info-box">
            <h3>Location</h3>
            <p>Hyderabad, India</p>
          </div>

        </div>

        <div className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button
  onClick={() => alert("Message Sent Successfully ✨")}
>
  Send Message
</button>

        </div>

      </div>

    </div>
  );
}

export default Contact;