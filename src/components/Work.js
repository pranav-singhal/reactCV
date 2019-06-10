import React from 'react'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WorkTab from './WorkTab'
import '../stylesheets/work.scss'
export default class Work extends React.Component{

render(){
    return(
        <Row>



            <Col md={6}>

                    <WorkTab/>
            </Col>


            <Col md={6}>
                <WorkTab/>
            </Col>
            <Col md={6}>
                <WorkTab/>
            </Col>
            <Col md={6}>
                <WorkTab/>
            </Col>
            <Col md={6}>
                <WorkTab/>
            </Col>
            <Col md={6}>
                <WorkTab/>
            </Col>
        </Row>


    )
}
}