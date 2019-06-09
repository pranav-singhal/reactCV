import React from 'react';
import '../App.scss';
import HomePage from './homePage'
import Work from './Work'
function App() {
  return (

          <HomePage path={'/'} component={Work}/>


  );
}

export default App;
