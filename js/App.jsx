// @flow

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// need to setup flow for this to work, comes from flow-typed
import type { Match } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';
import Details from './Details';
import preload from '../data.json';

const FourOhFour = () => <h1> 404 error </h1>;

// switch enables react app to render one component at at time and never render 2
const App = () => (
  <BrowserRouter>
    <div className="app" >
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        {
          // route path for details errors out saying that it needs to validate  match

          <Route
            path="/details/:id"
            component={(props: { match: Match }) => {
              const selectedShow = preload.shows.find(show => props.match.params.id === show.imdbID);
              // ...props give the component the rest of the props that show component wouldnt
              return <Details show={selectedShow} {...props} />;
            }}
          />
        }
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>

);

export default App;