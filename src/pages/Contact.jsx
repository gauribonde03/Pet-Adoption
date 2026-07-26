import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">

      <div className="contact-header">
        <h1>Adoption Form 🐾</h1>
        <p>
          Fill in the details below and we'll contact you soon.
        </p>
      </div>

      <form className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <input
          type="tel"
          placeholder="Phone Number"
        />

        <input
          type="text"
          placeholder="City"
        />

        <textarea
          rows="5"
          placeholder="Why do you want to adopt this pet?"
        ></textarea>

        <button type="submit">
          Submit 💕
        </button>

      </form>

    </div>
  );
};

export default Contact;