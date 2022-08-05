import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Edit from '../pages/Edit';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/edit" component={Edit} />
      </Switch>
    </BrowserRouter>
  );
}
