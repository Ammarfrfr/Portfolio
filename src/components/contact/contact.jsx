import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_59rxruk', 'template_r57hw2r', form.current, {
        publicKey
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          // so explain me this part
          // form.current.reset() achieves this by calling the reset method on the form element referenced by form.current
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-title">Lets Make Something Awesome Together</h2>

          <div className="field">
            <label>Name</label>
            <input type="text" name="user_name" required />
          </div>

          <div className="field">
            <label>Email</label>
            <input className='pl-4' type="email" name="user_email" required />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea name="message" rows="5" required className='h-10' />
          </div>

          <button type="submit" className="send-btn">
            Send Message →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;