import React, { useMemo } from "react";
import CircleLoader from "react-spinners/CircleLoader";

// MUI imports
import { Grid } from "@material-ui/core";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import ScrollTopButton from "../ScrollTopButton/ScrollTopButton";
import SpellProps from "../../types/SpellProps";

const SpellResults = ({ spells, loading, error, selectSpell }) => {
  return useMemo(() => {
    return (
      <>
        <Grid container spacing={2} justify="center">
          {/* If there's an error then display, else check to display loading icon, else display returned data */}
          {error ? (
            <p>{`Error! ${error.message}`}</p>
          ) : loading ? (
            <div className="rotate">
              {/* NOTE: react-spinners sizing is not responsive by default. Will need to adjust for mobile */}
              <CircleLoader size={"35rem"} color="#8080ff"></CircleLoader>
            </div>
          ) : (
            spells.map((spell: SpellProps) => (
              <SpellCard
                spell={spell}
                selectSpell={selectSpell}
                key={spell.name}
              />
            ))
          )}
          <ScrollTopButton />
        </Grid>
      </>
    );
  }, [spells, error, loading, selectSpell]);
};

export default SpellResults;
