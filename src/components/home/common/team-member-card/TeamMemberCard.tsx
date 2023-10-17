import React from "react";

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function TeamMemberCard(props: { teamMember: ITeamMember }) {
  const { teamMember } = props;

  return (
    <Card sx={{ width: "100%" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={teamMember.image}
        title="team member"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {teamMember.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {teamMember.role}
        </Typography>
      </CardContent>
    </Card>
  );
}
