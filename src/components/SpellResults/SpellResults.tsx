import React from "react";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../../graphql/queries/spellsQueries";

// MUI imports
import { Grid } from "@material-ui/core";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import SpellProps from "../../types/SpellProps";

const SpellResults = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  if (error) return <p>{`Error! ${error.message}`}</p>;

  return (
    <Grid container spacing={2} justify="center">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.spells.map((spell: SpellProps) => (
          <Grid item>
            <SpellCard {...spell} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default SpellResults;
