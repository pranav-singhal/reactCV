import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Work from './Work'
import HomePage from "./homePage";
import Education from "./Education";
import IntroPage from "./IntroPage";




const Router = props => {
    return(<BrowserRouter>
        <HomePage exact path={'/'} component={IntroPage}/>
        <HomePage exact path={'/education'} component={Education}/>
        <HomePage  exact path={'/work-experience'} component={Work} />
        </BrowserRouter>
    )
}
export default Router