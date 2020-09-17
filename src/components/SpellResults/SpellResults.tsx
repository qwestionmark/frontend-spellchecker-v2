import React from "react";

// Graphql imports
import { useQuery } from "@apollo/client";
import spellsQuery from "../../graphql/queries/spells";

// Component imports
import SpellCard from "../SpellCard/SpellCard";
import { SpellProps } from "";

const SpellResults = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return data.spells.map((spell: SpellProps) => <SpellCard spell={spell} />);
};

export default SpellResults;
