import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import SpellProps from "../../types/SpellProps";
import "./SpellCard.scss";

const SpellCard = ({ name, desc, range, casting_time }: SpellProps) => {
  return (
    <Card raised={true} className="SpellCard">
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography>Description: {desc[0]}</Typography>
        <Typography>Range: {range}</Typography>
        <Typography>Casting Time: {casting_time}</Typography>
      </CardContent>
    </Card>
  );
};

export default SpellCard;
