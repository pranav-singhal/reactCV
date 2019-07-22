import React from 'react'
import {Row, Col} from 'react-bootstrap'

export default class Education extends React.Component{

render(){
    return(
        <Row>
            <Col md={{'span':'10', 'offset': '1'}}>
        <table className={'table'}>
            <tr>
                <th>
                    Degree / Qualification
                </th>
                <th>
                    Institute
                </th>
                <th>
                    Marks / Percentage
                </th>
                <th>
                    Year of Completion
                </th>
            </tr>
            <tr>
                <td>
                    High School
                </td>
                <td>
                    The Heritage School
                </td>
                <td>
                    96%
                </td>
                <td>
                    March 2013
                </td>
            </tr>
            <tr>
                <td>

                Senior Secondary School
                </td>
                <td>
                    The Heritage School
                </td>
                <td>
                    96%
                </td>
                <td>
                    March 2015
                </td>
            </tr>
            <tr>
                <td>
                    Bachelor of Science
                    <br/>
                    (Physics Hons.)

                </td>
                <td>
                    Sri Venkateswara College
                </td>
                <td>
                    7.25

                </td>
                <td>
                    May 2019
                </td>
            </tr>

        </table></Col>
            </Row>


    )
}
}