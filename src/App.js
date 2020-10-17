import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Botao from './components/Botao/index';
import Relogio from './components/TelaRelogio/index';
import Cronometro from './components/telaCronometro/index2';
import Timer from './components/TelaTimer/Index';
import './css/App.css';


class App extends Component{
  render(){
    return(
      <>
      <div id="container">
        <div id="nav">
          <Botao><Link to="/">Relógio</Link></Botao>
          <Botao><Link to="/cronometro">Cronometro</Link></Botao>
          <Botao><Link to="/timer">Timer</Link></Botao>
        </div>
          <div id="content">
            <Switch>
              <Route exact path="/" component={Relogio}/>
              <Route path="/cronometro" component={Cronometro}/>
              <Route path="/timer" component={Timer}/>
            </Switch>
          </div>
        </div>
      </>
    )
  }
}

export default App;