import React from 'react';
import {Switch, Route} from 'react-router-dom';
import List from './list';
import ListToList from './listToList';

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/list/:id" component={ListToList} />
    </Switch>
  </main>
);
export default Main;
