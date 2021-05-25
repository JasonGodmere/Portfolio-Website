import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function ContactMe() {
  return (
    <div id="contact" className="Port-container Contact-container">
      <h1 className="Port-header--lg">CONTACT ME</h1>

      <Form className="contact-form-container">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Write your message here" />
        </Form.Group>
        <Button type="reset" className="mb-2">
          Submit
        </Button>
      </Form>
    </div>
  )
}