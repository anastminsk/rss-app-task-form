import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardEmpty from '../CardEmpty';
import Result from '../Result';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CardEmpty} />
        <Route exact path="/result" component={Result} />
      </Switch>
    );
  }
}

export default App;