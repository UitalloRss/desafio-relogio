import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Relogio from './pages/relogio';
import Cronometro from './pages/cronometro';
import Timer from './pages/timer'

ReactDOM.render(
  (
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Relogio}/>
          <Route path="/cronometro" component={Cronometro}/>
          <Route path="/timer" component={Timer}/>
        </Switch>
      </App>
    </Router>
  ),
  document.getElementById('root')
);
