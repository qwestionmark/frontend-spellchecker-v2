import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';

const link = new HttpLink({
  uri: process.env.SERVER_GRAPHQL_URL
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);

// Enables hot reloading
module.hot.accept();
