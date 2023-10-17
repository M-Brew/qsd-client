"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Image from "next/image";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import ServiceCard from "./common/service-card/ServiceCard";
import AttributeCard from "./common/attribute-card/AttributeCard";
import AccomplishmentCard from "./common/accomplishment-card/AccomplishmentCard";
import TeamMemberCard from "./common/team-member-card/TeamMemberCard";
import PricingCard from "./common/pricing-card/PricingCard";
import TestimonialCard from "./common/testimonial-card/TestimonialCard";

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

const attributes: IAttribute[] = [
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ mb: 2 }} />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ mb: 2 }} />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ mb: 2 }} />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
  {
    icon: <AccessTimeIcon fontSize="large" sx={{ mb: 2 }} />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, placeat!",
  },
];

const accomplishments: IAccomplishment[] = [
  {
    icon: <AccessTimeIcon />,
    title: "5 years",
    subtext: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "5 years",
    subtext: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "5 years",
    subtext: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <AccessTimeIcon />,
    title: "5 years",
    subtext: "Lorem ipsum dolor sit amet.",
  },
];

const teamMembers: ITeamMember[] = [
  {
    name: "Akosua",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Akosua",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
  {
    name: "Akosua",
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    role: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt repellat illo nostrum quae. Adipisci, qui.",
  },
];

const pricingPlans: IPricingPlan[] = [
  {
    icon: <AccessTimeIcon color="primary" fontSize="large" />,
    title: "Basic Plan",
    price: 100,
    services: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: <AccessTimeIcon color="primary" fontSize="large" />,
    title: "Regular Plan",
    price: 100,
    services: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
  {
    icon: <AccessTimeIcon color="primary" fontSize="large" />,
    title: "Premium Plan",
    price: 100,
    services: [
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
      "Lorem ipsum dolor sit amet consectetur",
    ],
  },
];

const testimonials: ITestimonial[] = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    name: "John Doe",
    subtext: "Lorem ipsum dolor sit amet.",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta excepturi incidunt deleniti architecto sit et unde asperiores inventore quibusdam!",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    name: "John Doe",
    subtext: "Lorem ipsum dolor sit amet.",
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, dicta excepturi incidunt deleniti architecto sit et unde asperiores inventore quibusdam!",
  },
];

export default function Home() {
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box py={3}>
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              md={5}
              lg={6}
              sx={{
                height: "60vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box>
                <Typography
                  fontSize={{ xs: 32, sm: 35, lg: 40 }}
                  fontWeight="bold"
                  lineHeight={1}
                  textAlign={phoneView || tabletView ? "center" : "start"}
                >
                  Hi,{phoneView ? <br /> : " "}I&apos;m Asantewaa
                </Typography>
                <Typography
                  fontSize={{ xs: 32, sm: 35, lg: 40 }}
                  fontWeight="bold"
                  lineHeight={1}
                  textAlign={phoneView || tabletView ? "center" : "start"}
                >
                  your housekeeper
                </Typography>
                <Typography
                  mt={3}
                  textAlign={phoneView || tabletView ? "center" : "start"}
                  fontSize={14}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                  est animi labore et officiis ratione ab magnam tenetur, dicta,
                  soluta, earum vero repellendus eveniet enim.
                </Typography>
                <Box
                  mt={3}
                  textAlign={phoneView || tabletView ? "center" : "start"}
                >
                  <Button variant="contained" disableElevation>
                    <Typography color="#ffffff">Book Now</Typography>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              lg={6}
              sx={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "55vh",
                  position: "relative",
                }}
              >
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                  }
                  alt="cleaner"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  fill
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: phoneView ? "150px" : "250px",
                    borderBottomRightRadius: phoneView ? "150px" : "250px",
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        py={3}
        sx={{
          backgroundColor: "rgba(137, 207, 240, 0.1)",
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography fontSize={14} fontWeight="bold" color="primary">
                Services
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                lineHeight={1}
                fontWeight="bold"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti, dolore.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontSize={12} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam itaque ut fugit veniam numquam, error modi culpa
                provident, corporis explicabo beatae odit nulla rem maiores!
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2} mt={1}>
              {services.map((service, idx) => (
                <Grid key={idx} item xs={12} sm={4}>
                  <ServiceCard service={service} />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box mt={3} textAlign="center">
                  <Button variant="contained" disableElevation>
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
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
                textAlign="center"
              >
                Why Choose Us
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2} mt={1}>
              {attributes.map((attribute, idx) => (
                <Grid key={idx} item xs={12} sm={6} md={3}>
                  <AttributeCard attribute={attribute} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={3}>
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={7} container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  fontSize={{ xs: 32, sm: 35, lg: 40 }}
                  fontWeight="bold"
                >
                  Our Accomplishments
                </Typography>
                <Typography
                  fontSize={12}
                  variant="body2"
                  color="text.secondary"
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing.
                </Typography>
              </Grid>
              {accomplishments.map((accomplishment, idx) => (
                <Grid key={idx} item xs={6}>
                  <AccomplishmentCard accomplishment={accomplishment} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={5}>
              <Box
                sx={{
                  width: "100%",
                  height: "40vh",
                  position: "relative",
                }}
              >
                <Image
                  src={
                    "https://plus.unsplash.com/premium_photo-1667520389879-a54173824049?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
                  }
                  alt="cleaner"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 50vw"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                  priority
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        py={3}
        sx={{
          backgroundColor: "rgba(137, 207, 240, 0.1)",
        }}
      >
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
              >
                The Team
              </Typography>
              <Typography fontSize={12} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2} mt={1}>
              {teamMembers.map((teamMember, idx) => (
                <Grid key={idx} item xs={12} sm={4}>
                  <TeamMemberCard teamMember={teamMember} />
                </Grid>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Box mt={3} textAlign="center">
                <Button variant="contained" disableElevation>
                  <Typography color="#ffffff" fontSize={14}>
                    The Team
                  </Typography>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={3}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
              >
                Pricing
              </Typography>
              <Typography fontSize={12} variant="body2" color="text.secondary">
                Lorem ipsum dolor sit, amet consectetur adipisicing.
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={3} mt={1}>
              {pricingPlans.map((plan, idx) => (
                <Grid key={idx} item xs={12} sm={4}>
                  <PricingCard plan={plan} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box py={3}>
        <Container>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography
                fontSize={{ xs: 32, sm: 35, lg: 40 }}
                fontWeight="bold"
              >
                Testimonials
              </Typography>
              <Typography fontSize={12} variant="body2" color="text.secondary">
                What our clients think of us.
              </Typography>
            </Grid>
            <Grid item xs={12} container spacing={2} mt={1}>
              {testimonials.map((testimonial, idx) => (
                <Grid key={idx} item xs={12} sm={6}>
                  <TestimonialCard testimonial={testimonial} />
                </Grid>
              ))}
              <Grid item xs={12}>
                <Box mt={3} textAlign="center">
                  <Button variant="contained" disableElevation>
                    <Typography color="#ffffff">More</Typography>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
