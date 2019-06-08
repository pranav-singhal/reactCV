import React from 'react';
import logo from '../logo.svg';
import '../App.scss';
import HomePage from './homePage'
import Work from './Work'
function App() {
  return (

          <HomePage path={'/'} component={Work}/>


  );
}

export default App;
