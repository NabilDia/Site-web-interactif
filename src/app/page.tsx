'use client';
import React from 'react';
import Navbar from './components/navbar';
import { menuItems } from './components/menu';
import { Box, Typography } from '@mui/material';
import Caroussel from './components/carroussel';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

export default function Page() {
  return (
    <>
      <Box sx={{ textAlign: 'center', padding: 4, backgroundColor: 'white' }}>
        <Typography variant="h2" component="h1" gutterBottom style={{ color: 'black' }}>
          Bienvenue sur notre site !
        </Typography>
      </Box>
      <Navbar items={menuItems} backgroundColor="white" />
      <Caroussel />
      <Newsletter />
      <Footer />
    </>
  );
}
