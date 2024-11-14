'use client'
import React from 'react';
import Menu from './components/navbar';
import Collections from './components/collection';

export default function page() {
  // Définissez les fonctions onClick pour chaque élément du menu
  const handleNewDropClick = () => {
    alert('Naviguez vers la section New Drop.');
  };
  const handleCollectionClick = () => {
    alert('Naviguez vers la section Collections.');
  };
  const handleSalesClick = () => {
    alert('Naviguez vers la section Sales.');
  };
  const handleGiftCardsClick = () => {
    alert('Naviguez vers les Gift Cards.');
  };
  const handleBrandsClick = () => {
    alert('Naviguez vers les Brands.');
  };
  const handleMagazineClick = () => {
    alert('Naviguez vers les Magazines.');
  };
  const handleAboutUsClick = () => {
    alert('Naviguez vers la section À propos de nous.');
  };
  const handleContactUsClick = () => {
    alert('Naviguez vers la section Contactez-nous.');
  };
  
 

  // Définissez les éléments de menu
  const menuItems = [
    
    { label: 'Nouveaux produits', onClick: handleNewDropClick },
    { label: 'Collections', onClick: handleCollectionClick },
    { label: 'Ventes', onClick: handleSalesClick },
    { label: 'Cartes cadeaux', onClick: handleGiftCardsClick },
    { label: 'Marques', onClick: handleBrandsClick },
    { label: 'Magazine', onClick: handleMagazineClick },
    { label: 'À propos de nous', onClick: handleAboutUsClick },
    { label: 'Contactez-nous', onClick: handleContactUsClick },
  ];

  return (
    <div>
      <Menu items={menuItems} backgroundColor="white" />
      <Collections/>
    </div>
  );
}
