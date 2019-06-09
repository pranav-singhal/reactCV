import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import '../stylesheets/IntroPage.scss';

export default class IntroPage extends React.Component {
    render() {
        return (
            <Row>
                <Col md={12}>
                    <h1>Hi, I'm Pranav Singhal</h1>
                    <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <p className={'intro-paragraph'}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eget neque in sapien
                                tempus sodales.
                                Aliquam sagittis tortor mi, ornare euismod tortor congue sed. Curabitur nec pharetra
                                libero, et eleifend enim.
                                In ac iaculis nunc, quis faucibus nisl. Quisque ullamcorper id arcu quis feugiat.
                                Vestibulum sapien libero,
                                molestie aliquet tincidunt eget, convallis a quam. Nunc eget sem eu sem varius interdum.
                                Aliquam et dictum mi,
                                a euismod ligula. Nunc ex metus, dapibus vel lectus finibus, varius viverra tellus. Nam
                                mi mi, elementum non
                                condimentum vel, iaculis vitae justo. Fusce viverra, ligula in scelerisque gravida, dui
                                justo malesuada neque,
                                ac lacinia nunc erat in orci. Donec sit amet nulla nisi. In ac efficitur eros
                            </p>
                        </Col>
                    </Row>


                </Col>

                <Col md={12}>
                    <h1>Recent Tweets</h1>

                    <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <p style={{'text-align':'center'}}>
                                Show 5 recent tweets
                            </p>

                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}