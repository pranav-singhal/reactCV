import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import App from './App'
import Work from './Work'

const Router = props => {
    return(
        <BrowserRouter>
            <Switch>
            <Route exact path ='/' component={App}/>
            </Switch>

        </BrowserRouter>
    )
}
export default Router