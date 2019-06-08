import React from 'react';
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
 class NavButton extends React.Component{
    state = {
        key: 'balue'
    }

     render(){


    return (
        <Button/>
    )
}
}
NavButton = withRouter(NavButton)
export default NavButton



