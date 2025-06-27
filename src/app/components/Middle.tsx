import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { MiddleProps } from "@/app/Interface/types";


export default function Middle({
  title = "Accessories",
  description = "Shop jewelleries, bags and creative accessories from the best African designers.",
  buttonText = "SHOP NOW",
  images = [
    "collier_argent_or.png",
    "collier_or.png",
    "collier_argent.png",
  ],
  textColor = "#fff",
  backgroundColor = "#000",
  buttonColor = "#fff",
}: MiddleProps) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          images.length === 2
            ? `url(${images[0]}), url(${images[1]})`
            : `url(${images[1]})`,
        backgroundSize: images.length === 2 ? "40% 100%, 40% 100%" : "cover",
        backgroundPosition:
          images.length === 2 ? "left center, right center" : "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: backgroundColor,
        padding: "80px", // Augmenter le padding pour correspondre à l'image
        borderRadius: "10px",
        position: "relative",
        overflow: "hidden",
        minHeight: "400px", // Ajuster la hauteur
      }}
    >
      <Box sx={{ textAlign: "center", position: "relative", zIndex: 10 }}>
        <Typography
          variant="h2" // Changer la taille de la police
          sx={{
            color: textColor,
            marginBottom: "20px",
            fontWeight: "bold",
            fontFamily: '"Playfair Display", serif', // Typographie similaire à l'image
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6" // Changer la taille de la police
          sx={{
            color: textColor,
            marginBottom: "20px",
            fontFamily: '"Playfair Display", serif', // Typographie similaire à l'image
          }}
        >
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: "#000", // Couleur du texte du bouton
            padding: "10px 20px",
            borderRadius: "5px",
            "&:hover": {
              backgroundColor: "#ddd", // Couleur au survol
            },
          }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
}
