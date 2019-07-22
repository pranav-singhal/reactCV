import React from 'react';
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import '../stylesheets/navButton.scss'


const NavButtonWithoutRouter = props => {
    return(<Button
        onClick={ () => {props.history.push('/' + props.pageLink)} }
        className={'nav-button'}
    >
        {props.pageName}
    </Button>)
};

const NavButton = withRouter(NavButtonWithoutRouter);
export default NavButton



