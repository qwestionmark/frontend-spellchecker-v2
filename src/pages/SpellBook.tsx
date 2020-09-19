import React, { useState } from "react";
import { useSpellFilter } from "../hooks/spellHooks";

// Component imports
import SpellResults from "../components/SpellResults/SpellResults";
import SpellSearchbar from "../components/SpellSearchBar/SpellSearchbar";

const SpellBook = () => {
  const [searchFilters, setsearchFilters] = useState({
    name: "",
  });
  const handleFilterChange = (e) => {
    const newFilters = { ...searchFilters, [e.target.name]: e.target.value };
    setsearchFilters(newFilters);
  };
  const { filteredSpells, loading, error } = useSpellFilter(searchFilters);

  return (
    <>
      <SpellSearchbar onChange={handleFilterChange} />
      <SpellResults spells={filteredSpells} loading={loading} error={error} />
    </>
  );
};

export default SpellBook;
