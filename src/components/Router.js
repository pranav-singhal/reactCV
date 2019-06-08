import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App'
import Work from './Work'
import HomePage from "./homePage";
import Education from "./Education";

const Router = props => {
    return(<BrowserRouter>
        <HomePage exact path={'/'} component={Work}/>
        <HomePage exact path={'/education'} component={Education}/>
        </BrowserRouter>










    )
}
export default Router