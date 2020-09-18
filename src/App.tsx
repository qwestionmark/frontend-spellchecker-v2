import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SpellResults from "./components/SpellResults/SpellResults";
import SpellSearchbar from "./components/SpellSearchBar/SpellSearchbar";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <SpellSearchbar />
    <SpellResults />
  </ApolloProvider>
);

export default App;
