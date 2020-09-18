import React from "react";

import { Route } from "react-router-dom";
import SpellBook from "./SpellBook";

const RouterSwitcher = () => {
  return (
    <Route exact path="/">
      <SpellBook />
    </Route>
  );
};

export default RouterSwitcher;
