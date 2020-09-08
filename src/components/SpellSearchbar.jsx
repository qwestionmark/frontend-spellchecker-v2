import React from "react";
import { useQuery } from "@apollo/client";
import spellsQuery from "../graphql/queries/spells";

const SpellSearchbar = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return data.spells.map((spell) => <p>{spell.name}</p>);
};

export default SpellSearchbar;
