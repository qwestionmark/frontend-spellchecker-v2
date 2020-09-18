import React, { useState } from "react";

import { TextField } from "@material-ui/core";

const SpellSearchbar = () => {
  const [searchName, setSearchName] = useState("");

  return (
    <form>
      <TextField onChange={(e) => setSearchName(e.target.value)} label="Name" />
    </form>
  );
};

export default SpellSearchbar;
