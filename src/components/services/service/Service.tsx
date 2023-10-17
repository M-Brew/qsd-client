"use client";
import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Service(props: {
  service: IService;
  reverse?: boolean;
}) {
  const { service, reverse } = props;
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 2,
        ...(reverse ? { backgroundColor: "rgba(137, 207, 240, 0.1)" } : {}),
      }}
    >
      <Container>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", alignItems: "center" }}
            order={phoneView ? 0 : reverse ? 1 : 0}
          >
            <Box
              sx={
                phoneView
                  ? { mb: 3 }
                  : { mr: reverse ? 0 : 3, ml: reverse ? 3 : 0 }
              }
            >
              <Typography variant="h5" mb={2}>
                {service.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {service.description}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} order={phoneView ? 1 : reverse ? 0 : 1}>
            <Box
              sx={{
                width: "100%",
                height: "40vh",
                position: "relative",
              }}
            >
              <Image
                src={
                  service.image ??
                  "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                }
                alt="service"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                fill
                style={{
                  objectFit: "cover",
                  borderRadius: "5px"
                }}
                priority
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
