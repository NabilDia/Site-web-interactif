import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import getCarouselItems from './carrousselItems'

export default function Caroussel() {
  const items = getCarouselItems();

  return (
    <Carousel>
      {items.map((item, i) => (
        <Paper
          key={i}
          elevation={3}
          sx={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '400px', // Ajustez la hauteur selon vos besoins
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              color: 'white',
              textShadow: '1px 1px 2px rgba (0, 0, 0, 0.5)',
              fontSize: '2rem',
              fontWeight: 'bold',
            }}
          >
            {item.name}
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
}