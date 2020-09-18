import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import SpellProps from "../../types/SpellProps";
import "./SpellCard.scss";
import LinesEllipsis from "react-lines-ellipsis";

const SpellCard = ({ name, desc, range, casting_time }: SpellProps) => {
  return (
    <Card raised={true} className="SpellCard">
      <CardContent>
        <Typography variant="h6" align="center">
          {name}
        </Typography>
        <Typography>
          <LinesEllipsis maxLine={4} text={desc[0]} basedOn="letters" />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SpellCard;
