'use client';

import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import PropTypes from 'prop-types';
import { BestProps } from '@/app/Interface/types'; // Item retiré car inutile

export default function Best({ items }: BestProps) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '40px 20px',
        backgroundColor: '#fff',
      }}
    >
      {/* Titre */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'serif',
          fontWeight: 'bold',
          marginBottom: '40px',
          color: 'black',
        }}
      >
        Our Best Sellers
      </Typography>

      {/* Grille d'items */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          flexWrap: 'wrap',
        }}
      >
        {items.map(({ id, title, image, link }) => (
          <Box
            key={id}
            sx={{
              position: 'relative',
              width: '300px',
              height: '400px',
              overflow: 'hidden',
              borderRadius: '10px',
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Image */}
            <img
              src={image}
              alt={title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '10px',
              }}
            />

            {/* Titre en overlay */}
            <Typography
              variant="h5"
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '30px',
                textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                zIndex: 2,
              }}
            >
              {title}
            </Typography>

            {/* Bouton */}
            <Button
              variant="contained"
              href={link}
              sx={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bold',
                borderRadius: '5px',
                padding: '10px 20px',
                zIndex: 2,
                '&:hover': {
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Shop Now
            </Button>

            {/* Overlay noir semi-transparent */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '10px',
                zIndex: 1,
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}

// PropTypes (optionnel si TS utilisé)
Best.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
