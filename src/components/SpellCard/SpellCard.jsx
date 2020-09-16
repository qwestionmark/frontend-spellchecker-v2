/* eslint-disable react/prop-types */
import React from "react";
import { Typography } from "@material-ui/core";

const SpellCard = ({ spell }) => (
  <Typography>
    <p>{spell.name}</p>
  </Typography>
);

export default SpellCard;
