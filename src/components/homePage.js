import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../stylesheets/homePage.scss'
import profilePic from '../assets/profile-image.jpg';
import NavButton from './navButton'
import {Route, BrowserRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomePage = ({component: Component, ...rest}) => {
    return (
            <Route {...rest} render={(matchProps) => (
                <Container className={'container-fluid'}>
                    <Row className={'jumbotron'}>
                        <Col md={4} className={'profile-image '}>
                            <img src={profilePic}/>
                            <h6 className={'name'}>Pranav Singhal</h6>
                            <h6>Physics Graduate</h6>
                            <h6>Freelance Web Developer</h6>
                            <h6><i className="fas fa-phone"></i> +91-9650906992</h6>
                            <h6><i className="far fa-envelope"></i> prnv_singhal@yahoo.co.in</h6>
                            <i className="fab fa-github"></i>
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-linkedin"></i>
                            <i className="fab fa-instagram"></i>



                        </Col>
                        <Col md={8} className={'quote-container'}>
                            <Row>
                                <Col md={12}>
                                    <p className={'quote'}>
                                        " Someone decided to lie honestly, and fiction was born."
                                    </p>
                                </Col>
                            </Row>
                            <Row className={'main-buttons '} >
                                <Col md={12}>
                                    <Row>
                                    <Col md={4} sm={4}>
                                    <NavButton pageLink={''} pageName={'About'}/>
                                    </Col>
                                    <Col md={4} sm={4}>
                                    <NavButton pageLink={'education'} pageName={'Education'}/>
                                    </Col>
                                    <Col md={4} sm={4}>
                                    <NavButton pageLink={'work-experience'} pageName={'Work'}/>
                                    </Col>
                                    </Row>


                                    {/*add a link for  downloading CV*/}
                                </Col>
                            </Row>

                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>

                            <Component />
                        </Col>
                    </Row>

                </Container>

            )}/>




    )

}


export default HomePage