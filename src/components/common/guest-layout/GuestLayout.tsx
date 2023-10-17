"use client";

import { ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";

import theme from "@/theme/theme";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

export default function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "rgba(137, 207, 240, 0.05)",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
