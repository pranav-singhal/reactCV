import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../stylesheets/homePage.scss'
import profilePic from '../assets/profile-image.jpg';
import NavButton from './navButton'
export default class HomePage extends React.Component {
    render() {

        return (
            <Container>


                <Row>

                    <Col md={2} className={'profile-image'}>
                        <img src={profilePic}/>

                    </Col>
                    <Col md={10}>
                        <Row>
                            <Col md={12}>
                                <p className={'quote'}>
                                    " Someone decided to lie honestly, and fiction was born."
                                </p>
                            </Col>
                        </Row>
                        <Row className={'main-buttons'}>

                            <NavButton testProp={"testing pros"}/>
                        </Row>

                    </Col>
                </Row>


            </Container>


        )
    }
}