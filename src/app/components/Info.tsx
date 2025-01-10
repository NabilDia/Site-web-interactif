import React from "react";
import { Box, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock"; // Icône de sécurité
import LocalShippingIcon from "@mui/icons-material/LocalShipping"; // Icône de livraison
import ChatIcon from "@mui/icons-material/Chat"; // Icône de chat (service client)
import {InfoSectionProps} from "@/Interface/types"




export default function InfoSection({
  paymentText = "Secure payment (SSL encrypted payments)",
  deliveryText = "International delivery (Everywhere via DHL)",
  serviceText = "Responsive customer service (Contact us via email or chat)",
  paymentIcon = <LockIcon sx={{ fontSize: 50, color: "black" }} />,
  deliveryIcon = <LocalShippingIcon sx={{ fontSize: 50, color: "black" }} />,
  serviceIcon = <ChatIcon sx={{ fontSize: 50, color: "black" }} />,
}: InfoSectionProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "40px 20px",
      }}
    >
      {/* Secure payment */}
      <Box sx={{ textAlign: "center", flex: 1 }}>
        {paymentIcon}
        <Typography variant="body2" sx={{ marginTop: 1, color: "black" }}>
          {paymentText}
        </Typography>
      </Box>

      {/* International delivery */}
      <Box sx={{ textAlign: "center", flex: 1 }}>
        {deliveryIcon}
        <Typography variant="body2" sx={{ marginTop: 1, color: "black" }}>
          {deliveryText}
        </Typography>
      </Box>

      {/* Responsive customer service */}
      <Box sx={{ textAlign: "center", flex: 1 }}>
        {serviceIcon}
        <Typography variant="body2" sx={{ marginTop: 1, color: "black" }}>
          {serviceText}
        </Typography>
      </Box>
    </Box>
  );
}
