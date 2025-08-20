'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/AboutUs', label: 'About Us' },
  { href: '/NewDrops', label: 'New Drops' },
  { href: '/Collections', label: 'Collections' },
  { href: '/Sales', label: 'Sales' },
  { href: '/GiftCards', label: 'Gift Cards' },
  { href: '/Brands', label: 'Brands' },
  { href: '/Magazine', label: 'Magazine' },
  { href: '/ContactUs', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <AppBar position="static" color="default" elevation={2}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
          Bienvenue sur notre site!
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {navLinks.map((link) => (
            <Button
              key={link.href}
              component={Link}
              href={link.href}
              variant={pathname === link.href ? 'contained' : 'text'}
              color={pathname === link.href ? 'primary' : 'inherit'}
              sx={{
                borderRadius: 2,
                fontWeight: 500,
                textTransform: 'none',
                backgroundColor:
                  pathname === link.href ? 'primary.light' : 'transparent',
                color:
                  pathname === link.href ? 'primary.main' : 'text.primary',
                '&:hover': {
                  backgroundColor:
                    pathname === link.href ? 'primary.main' : 'action.hover',
                  color: pathname === link.href ? 'white' : 'primary.main',
                },
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
