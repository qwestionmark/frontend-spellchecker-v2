import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.GRAPHQL_URL,
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <p>hello</p>
  </ApolloProvider>
);

export default App;
