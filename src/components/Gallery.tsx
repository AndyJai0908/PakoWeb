import React, { useState } from 'react';
import { theme } from '../styles/theme';

interface ArtWork {
  id: number;
  title: string;
  imageUrl: string;
  details: string;
  year: string;
  medium: string;
  size: string;
}

const Gallery = () => {
  const artworks: ArtWork[] = [
    {
      id: 1,
      title: "Dog and Gummy Bear",
      imageUrl: "/images/IMG_9663.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    },
    {
      id: 2,
      title: "Artwork 2",
      imageUrl: "/images/IMG_9325.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    },
    {
      id: 3,
      title: "Artwork 3",
      imageUrl: "/images/IMG_9661.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    },
    {
      id: 4,
      title: "Artwork 4",
      imageUrl: "/images/FullSizeRender.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    },
    {
      id: 5,
      title: "Artwork 5",
      imageUrl: "/images/d8de0459fcedfa35.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    },
    {
      id: 6,
      title: "Artwork 6",
      imageUrl: "/images/IMG_9662.jpg",
      details: "Acrylics, Canvas 70x80cm 2024",
      year: "2024",
      medium: "Acrylics",
      size: "70x80cm"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % artworks.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + artworks.length) % artworks.length);
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
        Artworks
      </h1>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        maxWidth: '1200px',
        justifyContent: 'space-between',
        margin: '0 auto'
      }}>
        {/* Left Arrow */}
        <button 
          onClick={goToPrevious}
          style={{
            background: 'none',
            border: 'none',
            color: theme.colors.text,
            fontSize: '6rem',
            cursor: 'pointer',
            padding: '0 2rem'
          }}
        >
          &#9664;
        </button>

        {/* Artwork Display */}
        <div style={{
          flex: 1,
          maxWidth: '800px',
          textAlign: 'center'
        }}>
          <img 
            src={artworks[currentIndex].imageUrl}
            alt={artworks[currentIndex].title}
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: theme.spacing.medium,
              border: `4px solid ${theme.colors.text}`
            }}
          />
          <div style={{
            color: theme.colors.text,
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginTop: theme.spacing.medium,
            textAlign: 'center'
          }}>
            {artworks[currentIndex].details}
          </div>
        </div>

        {/* Right Arrow */}
        <button 
          onClick={goToNext}
          style={{
            background: 'none',
            border: 'none',
            color: theme.colors.text,
            fontSize: '6rem',
            cursor: 'pointer',
            padding: '0 2rem'
          }}
        >
          &#9654;
        </button>
      </div>
    </div>
  );
};

export default Gallery; 