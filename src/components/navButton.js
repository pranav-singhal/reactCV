import React from 'react';
import Button from 'react-bootstrap/Button'
import {withRouter} from 'react-router-dom'
import '../stylesheets/navButton.scss'
 class NavButton extends React.Component{
    state = {
        key: 'balue'
    }
    handleClick = () => {
        console.log("I was clicked")
        this.props.history.push('/' + this.props.pageLink)
    }

     render(){


    return (
        <Button onClick={this.handleClick} className={'nav-button'}>{this.props.pageName} </Button>
    )
}
}
NavButton = withRouter(NavButton)
export default NavButton



