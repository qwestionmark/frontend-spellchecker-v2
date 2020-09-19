import React, { useState } from "react";
import { useSpellFilter } from "../hooks/spellHooks";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../graphql/queries/spellsQueries";

// Component imports
import SpellResults from "../components/SpellResults/SpellResults";
import SpellSearchbar from "../components/SpellSearchBar/SpellSearchbar";

const SpellBook = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  const [searchFilters, setsearchFilters] = useState({
    name: "",
  });
  const handleFilterChange = (e) => {
    const newFilters = { ...searchFilters, [e.target.name]: e.target.value };
    setsearchFilters(newFilters);
  };
  const filteredSpells = useSpellFilter({
    spells: data ? data.spells : [],
    filters: searchFilters,
  });

  return (
    <>
      <SpellSearchbar onChange={handleFilterChange} />
      <SpellResults spells={filteredSpells} loading={loading} error={error} />
    </>
  );
};

export default SpellBook;
