import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function AboutServiceCard(props: { service: IService }) {
  const { service } = props;

  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid
            item
            xs={2}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <AccessTimeIcon fontSize="large" color="primary" />
          </Grid>
          <Grid item xs={10}>
            <Typography fontSize={16} fontWeight="bold">
              {service.title}
            </Typography>
            <Typography fontSize={14} variant="body2" color="text.secondary">
              {service.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
