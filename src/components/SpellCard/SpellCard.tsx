import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import SpellProps from "../../types/SpellProps";
import "./SpellCard.scss";
import LinesEllipsis from "react-lines-ellipsis";

const SpellCard = ({ spell, selectSpell }) => {
  const { name, desc, range, casting_time } = spell;
  return (
    <Grid item>
      <Card
        raised={true}
        className="SpellCard"
        onClick={() => selectSpell(spell)}
      >
        <CardContent>
          <Typography variant="h6" align="center">
            {name}
          </Typography>
          <LinesEllipsis maxLine={4} text={desc[0]} basedOn="letters" />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SpellCard;
