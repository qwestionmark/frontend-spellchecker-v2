import React from "react";

import { TextField } from "@material-ui/core";

const SpellSearchbar = ({ onChange }) => {
  return (
    <form onChange={onChange}>
      <TextField label="Name" name="name" />
    </form>
  );
};

export default SpellSearchbar;
