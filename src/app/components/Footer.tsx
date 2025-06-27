import React from "react";
import { Box, Typography } from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard"; // Exemple pour carte de crédit
import AppleIcon from "@mui/icons-material/Apple"; // Exemple pour Apple Pay
import GoogleIcon from "@mui/icons-material/Google"; // Exemple pour Google Pay (utilisation approximative)
import LocalAtmIcon from "@mui/icons-material/LocalAtm"; // Exemple générique pour paiement
import InstagramIcon from "@mui/icons-material/Instagram"; // Icône Instagram
import FacebookIcon from "@mui/icons-material/Facebook"; // Icône Facebook

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "black",
        color: "white",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      {/* Suivez-nous */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Suivez-nous sur les réseaux sociaux
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Box
            sx={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <InstagramIcon sx={{ fontSize: 30 }} /> {/* Icône Instagram */}
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              width: 50,
              height: 50,
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
            }}
          >
            <FacebookIcon sx={{ fontSize: 30 }} /> {/* Icône Facebook */}
          </Box>
        </Box>
      </Box>

      {/* Catégories */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Catégories
        </Typography>
        <Box>
          <Typography>
            New Drop | Sales | Women | Brands | Gift Cards | Magazine
          </Typography>
        </Box>
      </Box>

      {/* Informations */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Informations
        </Typography>
        <Box>
          <Typography>
            Payment Options | Pick Ups and Deliveries | Returns, Exchanges and
            Refunds | Legal Mentions | Terms of Sales | Privacy Policy | FAQ
          </Typography>
        </Box>
      </Box>

      {/* Contact */}
      <Box sx={{ mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Contactez-nous
        </Typography>
        <Box>
          <Typography>Email: support@couleurconcept.com</Typography>
          <Typography>Phone: +225 07 08 58 48 48</Typography>
        </Box>
      </Box>

      {/* Icônes des options de paiement */}
      <Box sx={{ mt: 4, display: "flex", justifyContent: "center", gap: 2 }}>
        <CreditCardIcon sx={{ fontSize: 40, color: "white" }} />{" "}
        {/* Exemple pour carte de crédit */}
        <AppleIcon sx={{ fontSize: 40, color: "white" }} />{" "}
        {/* Exemple pour Apple Pay */}
        <GoogleIcon sx={{ fontSize: 40, color: "white" }} />{" "}
        {/* Exemple pour Google Pay */}
        <LocalAtmIcon sx={{ fontSize: 40, color: "white" }} />{" "}
        {/* Exemple générique pour paiement */}
      </Box>

      {/* Copyright */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="body2" color="gray">
          © Couleur Concept 2024 | Construit par Moolio.Agency
        </Typography>
      </Box>
    </Box>
  );
}
