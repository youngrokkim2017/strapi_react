import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingContainer from './pages'

const App = () => (
  <div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingContainer} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default App;