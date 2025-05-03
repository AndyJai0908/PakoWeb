import React, { useState } from 'react';
import { theme } from '../styles/theme';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const mailtoLink = `mailto:pakocheung9719@gmail.com?subject=Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div style={{
      padding: theme.spacing.large,
      backgroundColor: theme.colors.background,
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h1 style={{
        color: theme.colors.text,
        fontSize: '6rem',
        marginBottom: theme.spacing.large,
        fontWeight: 'bold',
        fontFamily: 'Arial, sans-serif'
      }}>
        Contacts
      </h1>

      <div style={{
        width: '100%',
        maxWidth: '800px',
        padding: theme.spacing.medium,
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing.medium
      }}>
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: theme.spacing.medium,
          marginBottom: theme.spacing.large
        }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid ${theme.colors.text}`,
              borderRadius: '4px',
              width: '100%'
            }}
            required
          />
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid ${theme.colors.text}`,
              borderRadius: '4px',
              width: '100%'
            }}
            required
          />
          
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            style={{
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid ${theme.colors.text}`,
              borderRadius: '4px',
              width: '100%',
              minHeight: '200px',
              resize: 'vertical'
            }}
            required
          />
          
          <button
            type="submit"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              fontSize: '1rem',
              cursor: 'pointer',
              alignSelf: 'flex-end'
            }}
          >
            Send
          </button>
        </form>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: theme.spacing.large
        }}>
          <div style={{
            textAlign: 'center'
          }}>
            <p style={{
              color: theme.colors.text,
              marginTop: '1rem',
              fontSize: '1.2rem'
            }}>
              Instagram: 
              @PPPPAKO000
            </p>
          </div>
          <div style={{
            textAlign: 'center'
          }}>
            <p style={{
              color: theme.colors.text,
              marginTop: '1rem',
              fontSize: '1.2rem'
            }}>
              Email:
              pakocheung9719@gmail.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 