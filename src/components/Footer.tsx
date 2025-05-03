import React from 'react';
import { theme } from '../styles/theme';

const Footer = () => {
  return (
    <footer style={{
      padding: theme.spacing.medium,
      backgroundColor: theme.colors.background,
      color: theme.colors.text,
      textAlign: 'center',
      marginTop: 'auto'
    }}>
      <p>© {new Date().getFullYear()} Pako Cheung. All rights reserved.</p>
      <div style={{ marginTop: theme.spacing.small }}>
        <a href="mailto:your.email@example.com" style={linkStyle}>Email</a>
        <a href="https://instagram.com" style={linkStyle}>Instagram</a>
        <a href="https://linkedin.com" style={linkStyle}>LinkedIn</a>
      </div>
    </footer>
  );
};

const linkStyle = {
  color: theme.colors.text,
  marginLeft: theme.spacing.small,
  textDecoration: 'none',
};

export default Footer; 