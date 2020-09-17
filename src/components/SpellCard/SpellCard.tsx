import React from "react";
import { Card } from "@material-ui/core";
import SpellProps from "../../types/SpellProps";

const SpellCard = (spell: SpellProps) => {
  return <Card>{spell.name}</Card>;
};

export default SpellCard;
