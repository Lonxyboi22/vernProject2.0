import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "bulma/css/bulma.min.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_r3zxxgq', 'template_kkqqiqv', form.current, 'nYtN2nfA6y54TZ9Nn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='form-spacing has-background-black'>
      <label className="contact-labels has-text-grey-light">Name</label>
      <input type="text" name="from_name" className="textField"/>
      <label className="contact-labels has-text-grey-light">Email</label>
      <input type="email" name="from_email" className="textField"/>
      <label className="contact-labels has-text-grey-light">Subject</label>
      <input type="subject" name="subject" className='textField'/>
      <label className="contact-labels has-text-grey-light">Message</label>
      <textarea name="message_html" className="textField"/>
      <input className='has-grey-light' type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;