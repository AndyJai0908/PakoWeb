import React from 'react';
import { theme } from '../styles/theme';

const About = () => {
  const textStyle = {
    color: theme.colors.text,
    fontSize: '1.2rem',
    lineHeight: '1.6',
    marginBottom: '1rem',
    textAlign: 'left' as const,
    fontWeight: 'bold'
  };

  return (
    <div style={{
      padding: theme.spacing.large,
      backgroundColor: theme.colors.background,
      minHeight: '100vh'
    }}>
      <h1 style={{
        color: theme.colors.text,
        fontSize: '4rem',
        marginBottom: theme.spacing.large,
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        Artist Bio
      </h1>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.5fr',
        gap: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          position: 'relative',
          padding: '20px'
        }}>
          <div style={{
            border: `4px solid ${theme.colors.text}`,
            borderRadius: '10px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <img 
              src="/elements/selfpic.jpg"
              alt="Pako Cheung"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block'
              }}
            />
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          textAlign: 'left'
        }}>
          <p style={textStyle}>
            Pako Cheung is a visual artist who graduated with a Bachelor of Arts (Hons) 
            in Visual Arts from the Academy of Visual Arts at Hong Kong Baptist 
            University. Specializing in both traditional painting and digital painting, 
            Pako has developed a unique artistic voice that resonates through his 
            vibrant and emotive work.
          </p>

          <p style={textStyle}>
            As a child, Pako was captivated by the world of animals, a fascination that 
            continues to inspire his art today. His pieces often explore this theme, using 
            animals as a medium to express his rich emotional landscape. Each painting serves 
            as a window into his sentimental nature, capturing the essence of his feelings 
            through the creatures he depicts.
          </p>

          <p style={textStyle}>
            Pako's work is characterized by a bold use of color, predominantly featuring 
            pink, blue, and yellow. He enjoys the striking visual language created by 
            these strong color contrasts, which bring his subjects to life in unexpected ways.
          </p>

          <p style={textStyle}>
            Despite his playful remark that his art can be purchased for "three 
            cheeseburgers," Pako's work has garnered serious attention. His highest 
            transaction as a young artist reached 216,727.53 IRR, reflecting the value 
            and appeal of his distinctive creations.
          </p>

          <p style={textStyle}>
            Through his vibrant palette and heartfelt themes, Pako Cheung continues to 
            engage audiences, inviting them to see the world through the eyes of his 
            artful animals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About; 