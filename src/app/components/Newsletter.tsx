import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { NewsletterProps } from "@/Interface/types";
// Interface pour les props

// Composant fonctionnel avec des valeurs par défaut
export default function Newsletter({
  title = "Join our newsletter",
  description = "Stay in touch with us to know about our new drops, special offers, and pop-up sales. You can unsubscribe at any time.",
  placeholder = "youremail@mail.com",
  buttonText = "Join",
  images = [
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/300",
  ], // Les images que vous avez téléchargées
  textColor = "black", // texte par défaut noir
  backgroundColor = "#f9f9f9",
  buttonColor = "black",
}: NewsletterProps) {
  return (
    <Box
      sx={{
        backgroundColor: backgroundColor,
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Texte principal */}
      <Typography variant="h4" gutterBottom sx={{ color: textColor }}>
        {title}
      </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: textColor }}>
        {description}
      </Typography>

      {/* Champ d'inscription */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 1,
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <TextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          sx={{
            flexGrow: 1,
            backgroundColor: "white",
          }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: buttonColor,
            color: "white",
            padding: "10px 20px",
          }}
        >
          {buttonText}
        </Button>
      </Box>

      {/* Images supplémentaires */}
      {images.length > 0 && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
            mt: 4,
            flexWrap: "wrap",
          }}
        >
          {images.map((imgSrc, index) => (
            <Box
              key={index}
              component="img"
              src={imgSrc}
              alt={`Newsletter image ${index + 1}`}
              sx={{ width: { xs: "100%", sm: "30%" }, borderRadius: "10px" }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
}
