import React from "react";
import { useQuery } from "@apollo/client";
import spellsQuery from "../../graphql/queries/spells";

import SpellCard from "../SpellCard/SpellCard";

const SpellResults = () => {
  const { data, loading, error } = useQuery(spellsQuery);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return data.spells.map((spell) => <SpellCard spell={spell} />);
};

export default SpellResults;
