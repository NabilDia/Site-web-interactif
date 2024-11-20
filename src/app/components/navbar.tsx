// navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

interface MenuItem {
  label: string;
  onClick: () => void;
}

interface MenuProps {
  items: MenuItem[];
  backgroundColor?: string; // Pour personnaliser la couleur d'arrière-plan
}

export default function Navbar({ items, backgroundColor = 'white' }: MenuProps) {
  return (
    <AppBar position="static" style={{ backgroundColor, color: 'black' }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1, display: 'flex', gap: 2 }}>
          {items.map((item, index) => (
            <Button key={index} onClick={item.onClick} color="inherit">
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}