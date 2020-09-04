import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import App from './App';
 
ReactDOM.render(
  <ApolloProvider>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);

// Enables hot reloading
module.hot.accept();
