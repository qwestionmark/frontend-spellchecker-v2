import React, { useState } from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import SpellProps from "../../types/SpellProps";
import "./SpellCard.scss";
import LinesEllipsis from "react-lines-ellipsis";
import SingleSpellModal from "../SingleSpellModal/SingleSpellModal";

const SpellCard = ({ spell }) => {
  const { name, desc } = spell;
  const [isOpen, setOpen] = useState(false);
  return (
    <Grid item>
      <Card raised={true} className="SpellCard" onClick={() => setOpen(spell)}>
        <CardContent>
          <Typography variant="h6" align="center">
            {name}
          </Typography>

          <LinesEllipsis maxLine={4} text={desc.join("\n")} basedOn="letters" />
        </CardContent>
      </Card>
      <SingleSpellModal isOpen={isOpen} setOpen={setOpen} spell={spell} />
    </Grid>
  );
};

export default SpellCard;
