import React from 'react';

function Contact() {
  const contactContainerStyle = {
    backgroundColor: '#f9f9f9',
    padding: '30px',
    textAlign: 'center',
  };

  const contactInfoStyle = {
    marginBottom: '20px',
  };

  return (
    <div style={contactContainerStyle}>
      <h2>Contact Us</h2>
      <div style={contactInfoStyle}>
        <p>Email: example@email.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Street, City, Country</p>
      </div>
      <form>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Your Email"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div>
          <textarea
            placeholder="Your Message"
            style={{ width: '100%', padding: '10px', height: '150px' }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
