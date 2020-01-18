import React from 'react'
import PhoneInput from "react-phone-input-auto-format"

const onChange = phoneNumber => {
  // do something with the phone number
};

const MessageMe = () => {
  return (
    <div className="MessageMe" id="messageme">
      <div className="message">
        <h1 className="title">Get In Touch</h1>
        <p className="exit_message">
          Thank you for checking out my website!
          If you're hiring, please send me a message using the form below.
          I look forward to hearing from you!
        </p>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">Send Me a Message</h2>
          <img className="send-image" src="/img/send.png" alt="send" />        
        </div>
        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div className="row">
            <div className="field">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input type="email" name="email" id="email" required />
            </div>          
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="phone-number">Phone</label>
              <PhoneInput onChange={onChange} required />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input type="text" name="company" id="company" required />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6" required />
            </div>
            <ul className="actions">
              <li>
                <button type="submit">
                  <img src="/img/paper-rocket-solid.png" type="submit" alt="paper-rocket" />                
                </button>
              </li>
              <li className="clear">
                <input type="reset" value="Clear" />
              </li>
            </ul>          
          </div>
        </form>
      </div>
    </div>
  )
}

export default MessageMe