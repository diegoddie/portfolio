import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailContactForm: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message
}) => (
  <div>
    <h1>New Contact Form Submission from {name}</h1>
    <h3>{email}</h3>
    <p>{message}</p>
  </div>
);