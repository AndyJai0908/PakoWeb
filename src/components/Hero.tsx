import React from 'react';
import { theme } from '../styles/theme';

const Hero = () => {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column' as 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: theme.spacing.medium,
      backgroundColor: theme.colors.background,
      position: 'relative'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        marginBottom: theme.spacing.large
      }}>
        <img 
          src="/elements/sign2.png" 
          alt="Pako Cheung Signature"
          style={{
            width: '100%',
            height: 'auto',
            objectFit: 'contain'
          }}
        />
      </div>
      <p style={{ 
        fontSize: '1.2rem', 
        maxWidth: '600px', 
        lineHeight: '1.6',
        color: theme.colors.text,
        marginTop: theme.spacing.large
      }}>
      </p>
    </div>
  );
};

export default Hero; 