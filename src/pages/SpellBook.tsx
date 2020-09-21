import React, { useState } from "react";
import { useSpellFilter } from "../hooks/spellHooks";

// Component imports
import SpellResults from "../components/SpellResults/SpellResults";
import SpellSearchbar from "../components/SpellSearchBar/SpellSearchbar";

// Type imports
import SpellProps from "../types/SpellProps";

const SpellBook = () => {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
  });
  const { filteredSpells, loading, error } = useSpellFilter(searchFilters);

  return (
    <>
      <SpellSearchbar onSubmit={setSearchFilters} />
      <SpellResults spells={filteredSpells} loading={loading} error={error} />
    </>
  );
};

export default SpellBook;
