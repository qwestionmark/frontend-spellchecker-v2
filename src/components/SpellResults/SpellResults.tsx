import React from "react";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../../graphql/queries/spellsQueries";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import SpellProps from "../../types/SpellProps";

const SpellResults = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return data.spells.map((spell: SpellProps) => <SpellCard {...spell} />);
};

export default SpellResults;
