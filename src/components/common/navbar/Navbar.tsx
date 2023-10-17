"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";

const navList = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/about" },
  { title: "Services", link: "/" },
  { title: "Pricing", link: "/" },
  { title: "Testimonials", link: "/" },
];

export default function Navbar() {
  const router = useRouter();
  const theme = useTheme();
  const phoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const tabletView = useMediaQuery(theme.breakpoints.down("md"));

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Container>
      {phoneView ? (
        <Box py={2}>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" alignItems="center">
              <MenuIcon onClick={() => setOpenDrawer(true)} />
              <Drawer
                anchor={"left"}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
              >
                <Box
                  sx={{
                    width: 250,
                  }}
                  role="presentation"
                  onClick={() => setOpenDrawer(false)}
                  onKeyDown={() => setOpenDrawer(false)}
                >
                  <List>
                    <ListItem>
                      <Typography fontSize={22} fontWeight="bold">
                        QSD
                      </Typography>
                    </ListItem>
                    {navList.map((item, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemButton onClick={() => router.push(item.link)}>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                  <Divider />
                  <List>
                    <ListItem disablePadding>
                      <ListItemButton onClick={() => router.push("/")}>
                        <ListItemText primary={"Contact Us"} />
                      </ListItemButton>
                    </ListItem>
                    <ListItem>
                      <Button variant="contained" disableElevation>
                        <Typography color="#ffffff">Book Now</Typography>
                      </Button>
                    </ListItem>
                  </List>
                  <Divider />
                </Box>
              </Drawer>
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
              <Typography fontSize={22} fontWeight="bold">
                QSD
              </Typography>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          py={2}
        >
          <Box>
            <Typography fontSize={28} fontWeight="bold">
              QSD
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <Link href={"/"} style={{ textTransform: "none" }}>
              <Typography
                mx={tabletView ? 1 : 2}
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link href={"/about"}>
              <Typography
                mx={tabletView ? 0.5 : 2}
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link href={"/services"}>
              <Typography
                mx={tabletView ? 0.5 : 2}
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                Services
              </Typography>
            </Link>
            <Link href={"/pricing"}>
              <Typography
                mx={tabletView ? 0.5 : 2}
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                Pricing
              </Typography>
            </Link>
            <Link href={"/testimonials"}>
              <Typography
                mx={tabletView ? 0.5 : 2}
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                Testimonials
              </Typography>
            </Link>
          </Box>
          <Box>
            <Button sx={{ mr: tabletView ? 0.5 : 1 }}>
              <Typography
                fontSize={14}
                variant="body2"
                color="text.secondary"
                sx={{
                  "&:hover": {
                    color: "#89CFF0",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Button>
            <Button variant="contained" disableElevation>
              <Typography color="#ffffff" fontSize={14}>
                Book Now
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </Container>
  );
}
