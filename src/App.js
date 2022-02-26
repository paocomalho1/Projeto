import React, { Component } from 'react';
import "./assets/css/reset.css"
import "./assets/css/style.css"
import Cabecalho from './components/cabecalho';
import Corpo from './components/corpo';

class App extends Component {

   
  render() { 
    return (
      <>
        <Cabecalho/>
        <Corpo/>
      </>
    );
  }
}
 
export default App;
