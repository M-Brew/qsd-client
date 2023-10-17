import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import CheckIcon from "@mui/icons-material/Check";

export default function PricingCard(props: { plan: IPricingPlan }) {
  const { plan } = props;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Container>
          {plan.icon}
          <Typography fontSize={14} fontWeight="bold" color="primary" mb={1}>
            {plan.title}
          </Typography>
          <Typography variant="h5" my={1}>
            GHC {plan.price.toFixed(2)}
          </Typography>
          {plan.services.map((service, idx) => (
            <Box key={idx} sx={{ display: "flex", alignItems: "center" }}>
              <CheckIcon sx={{ fontSize: 10 }} color="primary" />
              <Typography
                fontSize={14}
                variant="body2"
                color="text.secondary"
                ml={1}
                mb={1}
              >
                {service}
              </Typography>
            </Box>
          ))}
        </Container>
      </CardContent>
    </Card>
  );
}
