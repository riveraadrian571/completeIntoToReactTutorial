// @flow

import React from 'react';
// import Perf from 'react-addons-perf';
import { render } from 'react-dom';
import App from './App'

// triggers performance test once this component gets rendered
// when you want it to stop type Perf.stop() in the console and type Perf.printWasted() to the console to get report

// window.Perf = Perf;
// Perf.start();

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