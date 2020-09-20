import React, { useMemo } from "react";

// MUI imports
import { Grid } from "@material-ui/core";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import SpellProps from "../../types/SpellProps";

const SpellResults = ({ spells, loading, error }) => {
  return useMemo(() => {
    return (
      <>
        <Grid container spacing={2} justify="center">
          {/* If there's an error then display, else check to display loading icon, else display returned data */}
          {error ? (
            <p>{`Error! ${error.message}`}</p>
          ) : loading ? (
            <p>Loading...</p>
          ) : (
            spells.map((spell: SpellProps) => (
              <SpellCard {...spell} key={spell.name} />
            ))
          )}
        </Grid>
        <ScrollTopButton />
      </>
    );
  }, [spells, error, loading]);
};

export default SpellResults;
