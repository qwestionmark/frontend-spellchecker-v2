import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SpellBook from "./pages/SpellBook";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <SpellBook />
  </ApolloProvider>
);

export default App;
