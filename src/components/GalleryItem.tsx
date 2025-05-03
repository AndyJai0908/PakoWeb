import React from 'react';
import { theme } from '../styles/theme';
import './GalleryItem.css';

interface GalleryItemProps {
  imageUrl: string;
  title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, title }) => {
  return (
    <div className="gallery-item">
      <img 
        src={imageUrl} 
        alt={title}
        style={{
          width: '100%',
          height: '300px',
          objectFit: 'cover'
        }}
      />
      <h3 style={{ 
        padding: theme.spacing.small,
        margin: 0,
        fontSize: '1.2rem',
        color: theme.colors.text
      }}>{title}</h3>
    </div>
  );
};

export default GalleryItem; 