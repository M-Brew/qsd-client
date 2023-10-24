import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Link from "next/link";

const navList = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/services" },
  { title: "Pricing", link: "/pricing" },
  { title: "Testimonials", link: "/testimonials" },
];

export default function Footer() {
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down("sm"));

  const [selected, setSelected] = useState<string>();

  const handleSelect = (value: string) => {
    if (phoneView) {
      setSelected((prev) => (prev === value ? "" : value));
    }
  };

  return (
    <Box sx={{ backgroundColor: "rgba(137, 207, 240, 0.5)" }}>
      <Container sx={{ py: 2 }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              fontSize={phoneView ? 22 : 28}
              fontWeight="bold"
              mb={1}
              textAlign={phoneView ? "center" : "start"}
            >
              QSD
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} textAlign={phoneView ? "center" : "start"}>
            <Typography
              fontSize={16}
              fontWeight="bold"
              mb={1}
              onClick={() => handleSelect("contact")}
            >
              Contact Us
            </Typography>
            <Box
              display={!phoneView || selected === "contact" ? "block" : "none"}
            >
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <PhoneIcon fontSize="small" />
                <Typography fontSize={14} ml={1}>
                  Call: +233 50 000 0000
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <EmailIcon fontSize="small" />
                <Typography fontSize={14} ml={1}>
                  Email: asantewaa@gmail.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mb: 0.5 }}>
                <LocationOnIcon fontSize="small" />
                <Typography fontSize={14} ml={1}>
                  221 Baker Street, Kwashiman, Accra
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mt: 1 }}>
                <FacebookIcon fontSize="small" sx={{ mr: 1 }} />
                <InstagramIcon fontSize="small" sx={{ mr: 1 }} />
                <WhatsAppIcon fontSize="small" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} textAlign={phoneView ? "center" : "start"}>
            <Typography
              fontSize={16}
              fontWeight="bold"
              mb={1}
              onClick={() => handleSelect("links")}
            >
              Links
            </Typography>
            <Box
              display={!phoneView || selected === "links" ? "block" : "none"}
            >
              {navList.map((navItem, idx) => (
                <Link key={idx} href={navItem.link}>
                  <Typography fontSize={14} mb={0.5}>
                    {navItem.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={3} textAlign={phoneView ? "center" : "start"}>
            <Typography
              fontSize={16}
              fontWeight="bold"
              mb={1}
              onClick={() => handleSelect("services")}
            >
              Services
            </Typography>
            <Box
              display={!phoneView || selected === "services" ? "block" : "none"}
            >
              <Typography fontSize={14} mb={0.5}>
                Cleaning
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Laundry
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Gardening
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Baby Sitting
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Cooking
              </Typography>
            </Box>
          </Grid>
          {!phoneView && (
            <Grid
              item
              xs={12}
              sm={3}
              textAlign={phoneView ? "center" : "start"}
            >
              <Typography fontSize={16} fontWeight="bold" mb={1}>
                Subscribe to newsletter
              </Typography>
              <Box></Box>
            </Grid>
          )}
        </Grid>
      </Container>
      <hr style={{ border: "0.01px groove black" }} />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              py={1}
            >
              <Typography fontSize={12} mr={2}>
                {new Date().getFullYear()} @QSD
              </Typography>
              <Typography fontSize={12} mr={2}>
                Terms and Conditions
              </Typography>
              <Typography fontSize={12}>Privacy Policy</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
