import { useMemo } from "react";
import SpellProps from "../types/SpellProps";

function useSpellFilter({ spells, filters }) {
  return useMemo((): SpellProps[] => {
    // If spells isn't empty and search query is long enough to be meaningful, then filter, else return all
    let matchingSpells = [...spells];
    if (spells.length > 0 && filters.name.length > 2) {
      matchingSpells = spells.filter((spell) =>
        spell.name.match(new RegExp(filters.name, "gi"))
      );
    }
    return matchingSpells;
  }, [spells, filters]);
}

export { useSpellFilter };
