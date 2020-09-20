import React, { useState } from "react";
import { useSpellFilter } from "../hooks/spellHooks";

// Component imports
import SpellResults from "../components/SpellResults/SpellResults";
import SpellSearchbar from "../components/SpellSearchBar/SpellSearchbar";
import SingleSpellModal from "../components/SingleSpellModal/SingleSpellModal";

// Type imports
import SpellProps from "../types/SpellProps";

const SpellBook = () => {
  const [searchFilters, setSearchFilters] = useState({
    name: "",
  });
  const { filteredSpells, loading, error } = useSpellFilter(searchFilters);
  const [selectedSpell, setSelectedSpell] = useState<SpellProps | object>({});
  const [isSpellModalOpen, setSpellModalOpen] = useState(false);

  const handleSelectSpell = (spell) => {
    setSelectedSpell(spell);
    setSpellModalOpen(true);
  };

  return (
    <>
      <SpellSearchbar onSubmit={setSearchFilters} />
      <SpellResults
        spells={filteredSpells}
        selectSpell={handleSelectSpell}
        loading={loading}
        error={error}
      />
      <SingleSpellModal
        spell={selectedSpell}
        isOpen={isSpellModalOpen}
        setOpen={setSpellModalOpen}
      />
    </>
  );
};

export default SpellBook;
