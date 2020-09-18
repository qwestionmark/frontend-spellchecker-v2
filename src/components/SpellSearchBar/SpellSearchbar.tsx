import React from "react";

import { TextField } from "@material-ui/core";

const SpellSearchbar = ({ onChangeName }) => {
  return (
    <form>
      <TextField onChange={(e) => onChangeName(e.target.value)} label="Name" />
    </form>
  );
};

export default SpellSearchbar;
