import React from 'react';
import * as emailjs from 'emailjs-com';
import "bulma/css/bulma.min.css";

import { Field, Label, Control, Input, Button, Icon, Textarea, Notification } from 'rbx';

class ContactForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      subject,
      message_html: message,
    };
    emailjs.send(
      'service_r3zxxgq',
      'template_kkqqiqv',
       templateParams,
      'nYtN2nfA6y54TZ9Nn'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { name, email, subject, message, sentMessage } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className='form-spacing has-background-black'>
        <Field className="contact-container">
          <Label className="contact-labels has-text-grey-light">Name</Label>
          <Control className="textField">
            <Input
              name="name"
              type="text"
              placeholder="Your first and last name"
              value={name}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="contact-container">
          <Label className="contact-labels has-text-grey-light">Email</Label>
          <Control className="textField">
            <Input
              name="email"
              type="email"
              placeholder="email@example.com"
              value={email}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="contact-container">
          <Label className="contact-labels has-text-grey-light">Subject</Label>
          <Control className="textField">
            <Input
              name="subject"
              type="text"
              placeholder="What is the subject?"
              value={subject}
              onChange={this.handleChange}
            />
          </Control>
        </Field>
        <Field className="contact-container">
          <Label className="contact-labels has-text-grey-light">Message</Label>
          <Control className="textField">
            <Textarea
              name="message"
              placeholder="Tell me more about..."
              value={message}
              onChange={this.handleChange}
            />
          </Control>
        </Field>

        <Field className='has-background-black' kind="group">
          <Control className='send-cancel'>
            <Button color="light">Send</Button>
          </Control>
          <Control>
            <Button color="danger">Cancel</Button>
          </Control>
        </Field>
      </form>
    );
  }
}

export default ContactForm;