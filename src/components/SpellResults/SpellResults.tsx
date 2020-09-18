import React, { useState, useEffect } from "react";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../../graphql/queries/spellsQueries";

// MUI imports
import { Grid } from "@material-ui/core";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import SpellProps from "../../types/SpellProps";

const SpellResults = ({ searchName }) => {
  const { data, loading, error } = useQuery(spellsQuery);
  const [filteredSpells, setfilteredSpells] = useState<Array<SpellProps>>([]);

  const filterSpells = (): void => {
    const spells = data.spells;
    // If spells isn't empty and search query is long enough to be meaningful, then filter, else return all
    const matchingSpells =
      spells.length && searchName.length > 2
        ? spells.filter((spell) =>
            spell.name.match(new RegExp(searchName, "gi"))
          )
        : spells;
    debugger;
    setfilteredSpells(matchingSpells);
  };

  useEffect(() => {
    console.log("hit effect");
    if (data) {
      filterSpells();
    }
  }, [data, searchName, loading]);
  console.log("render");

  return (
    <Grid container spacing={2} justify="center">
      {/* If there's an error then display, else check to display loading icon, else display returned data */}
      {error ? (
        <p>{`Error! ${error.message}`}</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        filteredSpells.map((spell: SpellProps, index: number) => (
          <SpellCard {...spell} key={`${spell.name}-${index}`} />
        ))
      )}
    </Grid>
  );
};

export default SpellResults;
