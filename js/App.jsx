// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const FourOhFour = () => <h1> 404 error </h1>;

// switch enables react app to render one component at at time and never render 2
const App = () => (
  <BrowserRouter>
    <div className="app" >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        {/* */}
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;