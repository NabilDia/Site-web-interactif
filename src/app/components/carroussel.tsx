'use client'; // Si vous utilisez Next.js App Router
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import Image from 'next/image'; // Import Next.js Image
import getCarouselItems from './carrousselItems';

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
          <Image
            src={item.image}
            alt={item.name}
            layout="fill" // Remplit entièrement le parent
            objectFit="cover" // Gère le recadrage
            priority // Optimisation pour une meilleure LCP
          />
          <Box
            sx={{
              position: 'absolute',
              color: 'white',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
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
