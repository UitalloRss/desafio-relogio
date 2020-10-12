import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Botao from './components/Botao'
import Relogio from './pages/relogio';
import Cronometro from './pages/cronometro';
import Timer from './pages/timer';
import './css/App.css';


class App extends Component{
  render(){
    return(
      <div>
        <Botao><a href="/">Relógio</a></Botao>
        
        <Botao><a href="/cronometro">Cronometro</a></Botao>

        <Botao><a href="/timer">Timer</a></Botao>

        <Switch>
          <Route exact path="/" component={Relogio}/>
          <Route path="/cronometro" component={Cronometro}/>
          <Route path="/timer" component={Timer}/>
        </Switch>
      </div>
    )
  }
}

export default App;