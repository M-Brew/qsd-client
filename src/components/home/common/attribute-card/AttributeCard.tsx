import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function AttributeCard(props: { attribute: IAttribute }) {
  const { attribute } = props;

  return (
    <Card sx={{ width: "100%", py: 2 }}>
      <CardContent sx={{ textAlign: "center" }}>
        {attribute.icon}
        <Typography fontWeight="bold">
          {attribute.text}
        </Typography>
      </CardContent>
    </Card>
  );
}
