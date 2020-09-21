import React, { useRef } from "react";
import { spellLevels } from "../../utils/gameOptions";

import { TextField, Button, Select, MenuItem } from "@material-ui/core";

const SpellSearchbar = ({ onSubmit }) => {
  const searchFilters = useRef({
    name: "",
    level: "",
  });

  const handleChange = (e) => {
    const newFilters = {
      ...searchFilters.current,
      [e.target.name]: e.target.value,
    };
    searchFilters.current = newFilters;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(searchFilters.current);
  };

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <TextField label="Name" name="name" />
      <Select label="Level" name="level">
        {spellLevels.map((name: string, index: number) => (
          <MenuItem value={index} key={index}>
            {name}
          </MenuItem>
        ))}
      </Select>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SpellSearchbar;
