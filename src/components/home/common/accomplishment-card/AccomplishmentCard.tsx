import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function AccomplishmentCard(props: {
  accomplishment: IAccomplishment;
}) {
  const { accomplishment } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          padding: 1,
          backgroundColor: "whitesmoke",
          borderRadius: "5px",
        }}
      >
        {accomplishment.icon}
      </Box>
      <Box sx={{ ml: 2 }}>
        <Typography fontSize={14} fontWeight="bold">
          {accomplishment.title}
        </Typography>
        <Typography fontSize={12} variant="body2" color="text.secondary">
          {accomplishment.subtext}
        </Typography>
      </Box>
    </Box>
  );
}
