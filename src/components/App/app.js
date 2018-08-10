import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardEmpty from '../CardEmpty';
import CardSuccess from '../CardSuccess';
import CardWarning from '../CardWarning';
import CardDanger from '../CardDanger';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={CardEmpty} />
        <Route exact path="/success" component={CardSuccess} />
        <Route exact path="/warning" component={CardWarning} />
        <Route exact path="/danger" component={CardDanger} />
      </Switch>
    );
  }
}

export default App;