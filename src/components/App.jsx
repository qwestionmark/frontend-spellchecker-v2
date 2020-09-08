import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import SpellSearchbar from "./SpellSearchbar";

console.log(process.env.GRAPHQL_URL);

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
