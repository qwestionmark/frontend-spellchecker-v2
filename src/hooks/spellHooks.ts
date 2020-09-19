import { useMemo } from "react";
import SpellProps from "../types/SpellProps";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../graphql/queries/spellsQueries";

function useSpellFilter(filters) {
  const { data, loading, error } = useQuery(spellsQuery);
  return useMemo((): any => {
    // If spells isn't empty and search query is long enough to be meaningful, then filter, else return all
    let filteredSpells: SpellProps[] = [];
    if (data && data.spells) {
      if (filters.name.length < 3) {
        filteredSpells = data.spells.filter((spell) =>
          spell.name.match(new RegExp(filters.name, "gi"))
        );
      } else {
        filteredSpells = data.spells;
      }
    }
    return { filteredSpells, loading, error };
  }, [data, filters, loading, error]);
}

export { useSpellFilter };
