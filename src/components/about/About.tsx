"use client"

import React from "react";
import { useRouter } from "next/navigation";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";

import AboutServiceCard from "./common/about-service-card/AboutServiceCard";
import AboutTeamMemberCard from "./common/about-team-member-card/AboutTeamMemberCard";

const services: IService[] = [
  {
    title: "Home Cleaning",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
  {
    title: "Baby Sitting",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
  {
    title: "Cooking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
];

const teamMembers: ITeamMember[] = [
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Asantewaa",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
];

export default function About() {
  const router = useRouter();

  return (
    <>
      <Box
        py={3}
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            fontSize={{ xs: 32, sm: 35, lg: 40 }}
            fontWeight="bold"
            lineHeight={1}
            mb={3}
          >
            Quik Stuff Delivery
          </Typography>
          <Typography
            fontSize={16}
            variant="body2"
            color="text.secondary"
            textAlign="center"
            width={{ xs: "80%", sm: "70%", lg: "60%" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            recusandae illo fuga perferendis, ratione similique molestias quo
            quisquam eum, culpa id quibusdam ut? Esse est, aperiam, libero at
            debitis corrupti non praesentium quibusdam eos omnis, assumenda
            illum. Maxime, velit delectus, quidem doloremque provident facere
            quae ducimus voluptatum animi dignissimos aspernatur.
          </Typography>
        </Container>
      </Box>
      <Box
        py={3}
        sx={{
          backgroundColor: "rgba(137, 207, 240, 0.1)",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
                lineHeight={1}
                mb={3}
              >
                What we do?
              </Typography>
              <Typography variant="body2" color="text.secondary" fontSize={16}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                recusandae illo fuga perferendis, ratione similique molestias
                quo quisquam eum, culpa id quibusdam ut? Esse est, aperiam,
                libero at debitis corrupti non praesentium quibusdam eos omnis,
                assumenda illum. Maxime, velit delectus, quidem doloremque
                provident facere quae ducimus voluptatum animi dignissimos
                aspernatur.
              </Typography>
            </Grid>
            <Grid item container xs={12} sm={6} spacing={3}>
              {services.map((service, idx) => (
                <Grid key={idx} item xs={12}>
                  <AboutServiceCard service={service} />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => router.push("/services")}
                  >
                    <Typography color="#ffffff" fontSize={14}>
                      View All Services
                    </Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={3}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
                lineHeight={1}
                mb={3}
                textAlign="center"
              >
                The Team
              </Typography>
              <Typography
                fontSize={16}
                variant="body2"
                color="text.secondary"
                textAlign="center"
                width={{ xs: "80%", sm: "70%", lg: "60%" }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                recusandae illo fuga perferendis, ratione similique molestias
                quo quisquam eum, culpa id quibusdam ut.
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2} mt={1}>
              {teamMembers.map((teamMember, idx) => (
                <Grid key={idx} item xs={12} sm={4}>
                  <AboutTeamMemberCard teamMember={teamMember} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        py={3}
        sx={{
          minHeight: "50vh",
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(137, 207, 240, 0.1)",
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
                lineHeight={1}
                mb={3}
                textAlign="center"
              >
                Our Working Process
              </Typography>
              <Typography
                fontSize={16}
                variant="body2"
                color="text.secondary"
                textAlign="center"
                width={{ xs: "80%", sm: "70%", lg: "60%" }}
                mb={2}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                recusandae illo fuga perferendis, ratione similique molestias
                quo quisquam eum, culpa id quibusdam ut.
              </Typography>
            </Grid>
            <Grid item container xs={12} spacing={3}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <CalendarMonthIcon
                    fontSize="large"
                    color="primary"
                    sx={{ fontSize: "5rem", mb: 1 }}
                  />
                </Box>
                <Typography fontSize={20} fontWeight="bold">
                  Book us
                </Typography>
                <Typography
                  textAlign="center"
                  fontSize={16}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <PhoneIcon
                    fontSize="large"
                    color="primary"
                    sx={{ fontSize: "5rem", mb: 1 }}
                  />
                </Box>
                <Typography fontSize={20} fontWeight="bold">
                  Get confirmation
                </Typography>
                <Typography
                  textAlign="center"
                  fontSize={16}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  <SendIcon
                    fontSize="large"
                    color="primary"
                    sx={{ fontSize: "5rem", mb: 1 }}
                  />
                </Box>
                <Typography fontSize={20} fontWeight="bold">
                  We deliver your desired service
                </Typography>
                <Typography
                  textAlign="center"
                  fontSize={16}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
