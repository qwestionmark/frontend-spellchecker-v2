import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
 
ReactDOM.render(
  <App>App</App>,
  document.getElementById('app')
);

// Enables hot reloading
module.hot.accept();
