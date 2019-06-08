import React from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import '../stylesheets/homePage.scss'
import profilePic from '../assets/profile-image.jpg';
import NavButton from './navButton'
import {Route, BrowserRouter} from "react-router-dom";
import Work from './Work';

// export default class HomePage extends React.Component {
//     render() {
//
//         return (
//             <Container>
//
//
//                 <Row>
//
//                     <Col md={2} className={'profile-image'}>
//                         <img src={profilePic}/>
//
//                     </Col>
//                     <Col md={10}>
//                         <Row>
//                             <Col md={12}>
//                                 <p className={'quote'}>
//                                     " Someone decided to lie honestly, and fiction was born."
//                                 </p>
//                             </Col>
//                         </Row>
//                         <Row className={'main-buttons'}>
//                             <Col md={12}>
//
//                                 <NavButton  />
//                                 <NavButton  />
//                                 <NavButton  />
//                             </Col>
//                         </Row>
//
//                     </Col>
//                 </Row>
//                 <Row>
//                     <Switch>
//                     <Route exact path={'/work'} component={Work}></Route>
//                     </Switch>
//                 </Row>
//
//
//             </Container>
//
//
//         )
//     }
// }

const HomePage = ({component: Component, ...rest}) => {
    return (<BrowserRouter>
            <Route {...rest} render={(matchProps) => (
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
                                <Col md={12}>

                                    <NavButton/>
                                    <NavButton/>
                                    <NavButton/>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                    <Row>
                            <Component />
                    </Row>

                </Container>

            )}/>

        </BrowserRouter>


    )

}


export default HomePage