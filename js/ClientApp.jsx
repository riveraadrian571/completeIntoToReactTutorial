// @flow

import React from 'react';
import { render } from 'react-dom';
import App from './App'

const renderApp = () => {
  render(<App />, document.getElementById('app'));
};
renderApp();
// module is defined in types.js file
if (module.hot) {
  module.hot.accept('./App', () => {
    renderApp();
  });
};