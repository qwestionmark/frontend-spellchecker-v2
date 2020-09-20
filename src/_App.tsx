import React from "react";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import RouteSwitcher from "./pages/_RouteSwitcher";
import "./styles/_globals.scss";

const client = new ApolloClient({
  uri: "http://localhost:7000/graphql",
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={client}>
    <BrowserRouter>
      <RouteSwitcher />
    </BrowserRouter>
  </ApolloProvider>
);

export default App;
