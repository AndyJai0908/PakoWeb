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

const GalleryPage = () => {
  const artworks: ArtWork[] = [
    {
      id: 1,
      title: "Dog and Gummy Bear",
      imageUrl: "/PakoWeb/images/IMG_9663.jpg",
      details: "“Farm” 20x25cm 2024 - Acrylic on canvas",
      year: "2024",
      medium: "Acrylics",
      size: "20x25cm"
    },
    {
      id: 2,
      title: "Artwork 2",
      imageUrl: "/PakoWeb/images/IMG_9325.jpg",
      details: "“Lost Glasses” 60x80cm 2024 - Acrylic on canvas",
      year: "2024",
      medium: "Acrylics",
      size: "60x80cm"
    },
    {
      id: 3,
      title: "Artwork 3",
      imageUrl: "/PakoWeb/images/IMG_9661.jpg",
      details: "“Dawgs” 60x80cm 2024- Acrylic on canvas",
      year: "2024",
      medium: "Acrylics",
      size: "60x80cm"
    },
    {
      id: 4,
      title: "Artwork 4",
      imageUrl: "/PakoWeb/images/FullSizeRender.jpg",
      details: "“Human Abstraction” 42x30cm 2023 - Ink on paper",
      year: "2023",
      medium: "Ink",
      size: "42x30cm"
    },
    {
      id: 5,
      title: "Artwork 5",
      imageUrl: "/PakoWeb/images/d8de0459fcedfa35.jpg",
      details: "“Untitled” 150x180cm 2024 - Ink on paper",
      year: "2024",
      medium: "Ink",
      size: "150x180cm"
    },
    {
      id: 6,
      title: "Artwork 6",
      imageUrl: "/PakoWeb/images/IMG_9662.jpg",
      details: "“Far” 150x180cm 2024 - Acrylic on canvas",
      year: "2024",
      medium: "Acrylics",
      size: "150x180cm"
    },
    {
      id: 7,
      title: "Artwork 6",
      imageUrl: "/PakoWeb/images/B32DA9CF-9F97-4397-953E-DD8ACAFA0946.jpg",
      details: "“Loved” 50x40cm 2025 - Acrylic on canvas",
      year: "2025",
      medium: "Acrylics",
      size: "50x40cm"
    },
    {
      id: 8,
      title: "Artwork 6",
      imageUrl: "/PakoWeb/images/D34615B9-1EDF-4794-BA64-7C1F3007C715.jpg",
      details: "Water White” 20x25cm 2025 - Acrylic on canvas",
      year: "2025",
      medium: "Acrylics",
      size: "20x25cm"
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
        margin: '0 auto',
        gap: theme.spacing.medium
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
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px'
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
              border: `4px solid ${theme.colors.text}`,
              objectFit: 'contain',
              maxHeight: '60vh'
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
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100px'
          }}
        >
          &#9654;
        </button>
      </div>

      {/* Navigation Dots */}
      <div style={{
        display: 'flex',
        gap: '10px',
        marginTop: theme.spacing.medium
      }}>
        {artworks.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: index === currentIndex ? theme.colors.text : '#ccc',
              border: 'none',
              cursor: 'pointer'
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryPage; 