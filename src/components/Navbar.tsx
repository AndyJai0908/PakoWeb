import React from 'react';
import { Link } from 'react-router-dom';
import { theme } from '../styles/theme';

const Navbar = () => {
  return (
    <nav style={{
      padding: theme.spacing.small,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.background,
      boxShadow: `0 2px 4px ${theme.colors.shadow}`
    }}>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ margin: 0, fontSize: '1.5rem', color: theme.colors.text }}>Pako Cheung</h1>
      </Link>
      <div>
        <Link to="/gallery" style={linkStyle}>Gallery</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
    </nav>
  );
};

const linkStyle = {
  marginLeft: '2rem',
  textDecoration: 'none',
  color: theme.colors.text,
  fontWeight: 500,
};

export default Navbar; 