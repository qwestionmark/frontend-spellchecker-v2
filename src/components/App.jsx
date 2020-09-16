import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SpellSearchbar from "./SpellSearchbar";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <SpellSearchbar />
  </ApolloProvider>
);

export default App;
