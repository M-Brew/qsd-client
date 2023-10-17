import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
              <Typography fontSize={14} mb={0.5}>
                Call
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Email
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Address
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Socials
              </Typography>
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
              <Typography fontSize={14} mb={0.5}>
                Home
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                About Us
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Contact Us
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Pricing
              </Typography>
              <Typography fontSize={14} mb={0.5}>
                Reviews
              </Typography>
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
              {/* <Typography fontSize={12}>All rights reserved</Typography> */}
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
