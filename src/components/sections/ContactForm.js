import React from 'react'

const ContactForm = () => {
  return (
    <div className="ContactForm">
      <div className="message">
        <h1 className="title">Get In Touch</h1>
        <p className="exit_message">
          Thank you for checking out my website!
          If you're hiring, please send me a message using the form below.
          I look forward to hearing from you!
        </p>
      </div>
      <div className="form-container">
        <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="field half first">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field half">
            <label htmlFor="phone-number">Phone Number</label>
            <input type="text" name="phone-number" id="phone-number" />
          </div>
          <div className="field half">
            <label htmlFor="company">Company</label>
            <input type="text" name="company" id="company" />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows="6" />
          </div>
          <ul className="actions">
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Clear" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default ContactForm