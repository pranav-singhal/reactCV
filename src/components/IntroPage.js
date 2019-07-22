import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import '../stylesheets/IntroPage.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class IntroPage extends React.Component {
    state={
        sliderSettings: {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        }

    }
    render() {

        return (
            <Row>
                <Col md={12}>
                    <h1>Hi, I'm Pranav Singhal</h1>
                    <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <p className={'intro-paragraph'}>
                                Hi, I'm Pranav Singhal. I like to read, play guitar and occasionally work. Currently, I'm working as a blockchain
                                intern at Turing Labs - specialising in front-end.
                            </p>
                        </Col>
                    </Row>


                </Col>

                <Col md={12}>
                    <h1>Recent Tweets</h1>

                    <Row>
                        <Col md={{span: 10, offset: 1}}>


                            <Slider {...this.state.sliderSettings}>

                                <div className={'tweets'}>
                                    <blockquote className="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Nothing
                                        wrong with contradicting yourself in what you say. <a
                                            href="https://t.co/0v0hXojsc8">https://t.co/0v0hXojsc8</a></p>&mdash; Pranav singhal
                                        (@_pranav_singhal) <a
                                            href="https://twitter.com/_pranav_singhal/status/1136902909570953216?ref_src=twsrc%5Etfw">June
                                            7, 2019</a></blockquote>

                                </div>

                                <div className={'tweets'}>
                                    <blockquote className="twitter-tweet" data-theme="light"><p lang="en" dir="ltr">Nothing
                                        wrong with contradicting yourself in what you say. <a
                                            href="https://t.co/0v0hXojsc8">https://t.co/0v0hXojsc8</a></p>&mdash; Pranav singhal
                                        (@_pranav_singhal) <a
                                            href="https://twitter.com/_pranav_singhal/status/1136902909570953216?ref_src=twsrc%5Etfw">June
                                            7, 2019</a></blockquote>

                                </div>

                            </Slider>













                        </Col>
                    </Row>
                    <Row>
                        another paragraph
                    </Row>
                </Col>
            </Row>
        )
    }
}