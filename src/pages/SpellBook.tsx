import React, { useState } from "react";
import SpellResults from "../components/SpellResults/SpellResults";
import SpellSearchbar from "../components/SpellSearchBar/SpellSearchbar";

const SpellBook = () => {
  const [searchName, setSearchName] = useState("");
  return (
    <>
      <SpellSearchbar onChangeName={setSearchName} />
      <SpellResults searchName={searchName} />
    </>
  );
};

export default SpellBook;
