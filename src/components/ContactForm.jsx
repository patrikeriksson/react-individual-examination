import { useState, useId } from "react";
import { Link } from "react-router-dom";
import "../styles/ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submitted, setSubmitted] = useState(false);

  const handeSubmit = (e) => {
    e.preventDefault();

    // Just using console logs for now, to see that it works. Will update it to actually send me a message if I ever deploy this site.
    console.log({ name, email, message });
    console.log("Form submitted!");

    setSubmitted(true);
  };

  const id = useId();

  return (
    <>
      {/* If the form is not yet submitted it renders the form */}
      {!submitted ? (
        <form onSubmit={handeSubmit}>
          <fieldset>
            <legend>Contact Information</legend>
            <label htmlFor={id + "-name"}>Name</label>
            <input
              type="text"
              value={name}
              id={id + "-name"}
              name="contact-name"
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor={id + "-email"}>Email</label>
            <input
              type="email"
              value={email}
              id={id + "-email"}
              name="contact-email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <label htmlFor={id + "-message"}>Message</label>
            <textarea
              value={message}
              id={id + "-message"}
              name="contact-message"
              rows={6}
              required
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </fieldset>
          <button type="submit">Send message</button>
        </form>
      ) : (
        // Once the user submits the form and the handeSubmit function updates the state it renders a thank you message instead.
        <section className="thank-you-section">
          <h2>Thank you for your message!</h2>
          <p>I will get back to you shortly.</p>
          <Link to="/">
            <button>Retrun to about page</button>
          </Link>
        </section>
      )}
    </>
  );
}

export default ContactForm;
