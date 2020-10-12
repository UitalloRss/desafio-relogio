import { render } from '@testing-library/react';
import { Component } from 'react';
import React from 'react';
import {Menubar} from 'primereact/menubar';
import { withRouter } from 'react-router-dom';

class App extends Component{
  render(){
    const menuitems = [
      {
         label:'Relógio',
         command:() => this.props.history.push('/')
      },
      {
         label:'Cronometro',
         command:() => this.props.history.push('/cronometro')

      },
      {
         label:'Timer',
         command:() => this.props.history.push('/timer')

      }
   ];

    return(
      <div className="app">
        <Menubar model={menuitems}/>
        <div id="main">
          <main>
            <div className="content" id="content">
              {this.props.children}
            </div>
          </main>
        </div>
      </div>
    );
  }
}

export default withRouter(App);