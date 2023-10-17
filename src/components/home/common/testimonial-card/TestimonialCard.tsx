import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function TestimonialCard(props: { testimonial: ITestimonial }) {
  const { testimonial } = props;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Avatar alt="client-1" src={testimonial.image} />
              <Box ml={1}>
                <Typography fontWeight="bold">{testimonial.name}</Typography>
                <Typography
                  fontSize={12}
                  variant="body2"
                  color="text.secondary"
                >
                  {testimonial.subtext}
                </Typography>
              </Box>
            </Box>
            <Box>
              <FormatQuoteIcon />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography fontSize={14} variant="body2" color="text.secondary">
              {testimonial.quote}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
