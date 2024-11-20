// page.tsx
'use client';
import React from 'react';
import Navbar from './components/navbar';
import { menuItems } from './components/menu';
import { Box, colors, Typography } from '@mui/material';
import Caroussel from './components/carroussel';
import getCarouselItems from './components/carrousselItems';

export default function Page() {
  return (
    <div>
      <Box sx={{ textAlign: 'center', padding: 4 }} backgroundColor="white">
        <Typography variant="h2" component="h1" gutterBottom style={{ color: 'black' }}>
          Bienvenue sur notre site !
        </Typography>
      </Box>
      <Navbar items={menuItems} backgroundColor="white" />
      <Caroussel />
    </div>
  );
}