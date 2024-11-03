import React, { useState } from 'react';
// import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to send form data (e.g., using EmailJS or Formspree)
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="contact-page">
      <h2>Contactez-moi</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
