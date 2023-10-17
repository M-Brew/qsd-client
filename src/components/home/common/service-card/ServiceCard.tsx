import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function ServiceCard(props: { service: IService }) {
  const { service } = props;

  return (
    <Card sx={{ width: "100%", py: 2 }}>
      <CardContent>
        <Typography fontSize={16} fontWeight="bold" pb={2}>
          {service.title}
        </Typography>
        <Typography fontSize={14} variant="body2" color="text.secondary">
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
