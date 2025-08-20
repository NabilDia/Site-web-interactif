// app/page.tsx
"use client";

import { Box, Typography } from "@mui/material";
import Caroussel from "./components/carroussel";
import Best from "./components/best";
import Middle from "./components/Middle";
import Newsletter from "./components/Newsletter";
import Info from "./components/Info";
import { bestSellingItems } from "./components/bestmenu";

export default function Home() {
  return (
    <>
      <Box sx={{ textAlign: "center", padding: 4, backgroundColor: "white" }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ color: "black" }}
        >
        </Typography>
      </Box>
      <Caroussel />
      <Best items={bestSellingItems} />
      <Middle />
      <Newsletter />
      <Info />
    </>
  );
}
