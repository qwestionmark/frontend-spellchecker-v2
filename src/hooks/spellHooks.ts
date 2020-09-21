import { useMemo } from "react";
import SpellProps from "../types/SpellProps";
import filterSpells from "../utils/filterSpells";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../graphql/queries/spellsQueries";

function useSpellFilter(filters) {
  const { data, loading, error } = useQuery(spellsQuery);
  return useMemo((): any => {
    // If spells isn't empty and search query is long enough to be meaningful, then filter, else return all
    let filteredSpells: SpellProps[] = [];
    if (data && data.spells) {
      filteredSpells = filterSpells(data.spells, filters);
    }
    return { filteredSpells, loading, error };
  }, [data, filters, loading, error]);
}

export { useSpellFilter };
