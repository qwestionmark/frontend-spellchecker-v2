import React, { useRef } from "react";

import { TextField, Button } from "@material-ui/core";

const SpellSearchbar = ({ onSubmit }) => {
  const searchFilters = useRef({
    name: "",
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
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SpellSearchbar;
