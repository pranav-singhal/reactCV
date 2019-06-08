import React from 'react';
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
 class NavButton extends React.Component{
    state = {
        key: 'balue'
    }
    handleClick = () => {
        console.log("I was clicked")
        this.props.history.push('/' + this.props.pageName)
    }

     render(){


    return (
        <Button onClick={this.handleClick}/>
    )
}
}
NavButton = withRouter(NavButton)
export default NavButton



