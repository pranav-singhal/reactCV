import React, {useEffect} from 'react';
import {Container, Row, Col} from 'react-bootstrap'

const WorkDescription = (props) => {
    useEffect(() => {
        console.log(" i was mounted")
    })

    return (
        <div className={'work-modal'}>
            <Container>

                <button type="button" className="close" aria-label="Close" onClick={() => {
                    props.closeModal()
                }}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <Row className={'header'}>
                    <Col md={12}>

                        <h1>
                            {props.title}
                        </h1>


                    </Col>
                </Row>
                <Row>
                    <Col md={12} className={'work-links'}>
                        <div>
                            <i className="fab fa-medium"></i>
                            <i className="fab fa-github"></i>
                            <i className="fas fa-link"></i>
                        </div>


                    </Col>
                </Row>
                <Row>
                    <Col md={12} className={'description'}>
                        <p>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat ligula quis ex tristique aliquet.
                        Nulla eu commodo ex, at venenatis magna. Aenean pellentesque placerat nibh ac hendrerit. Nullam eu
                        viverra est. Pellentesque eleifend varius enim, vel hendrerit magna pulvinar eget. Nullam volutpat lacus
                        non orci egestas varius. Etiam commodo vel urna et hendrerit. Phasellus risus sem, iaculis
                        eget pretium sagittis, aliquam eu leo. Donec sagittis ipsum in blandit fermentum. Quisque eu
                        mauris non neque porta mattis posuere ac lacus. Vestibulum vitae nibh sed turpis consectetur tempor sit
                        amet nec elit.
                            <br/>

                        In a posuere diam, quis aliquam tellus. Vivamus rhoncus, massa vel pharetra lobortis, quam ante posuere
                        metus, in sollicitudin ligula mauris sit amet metus. Sed in lacus vitae dolor posuere feugiat id
                        nec risus. Fusce vitae lacus rhoncus, vehicula ipsum vel, bibendum nisi. Etiam ac
                        tincidunt risus. Duis id massa bibendum, sodales sem non, pretium enim. Nam bibendum
                        , tortor gravida cursus tristique, mi dolor imperdiet libero, nec finibus ipsum orci a ante
                        . Nunc sollicitudin purus ac nulla laoreet vulputate.
                            <br/>
                            In a posuere diam, quis aliquam tellus. Vivamus rhoncus, massa vel pharetra lobortis, quam ante posuere
                            metus, in sollicitudin ligula mauris sit amet metus. Sed in lacus vitae dolor posuere feugiat id
                            nec risus. Fusce vitae lacus rhoncus, vehicula ipsum vel, bibendum nisi. Etiam ac
                            tincidunt risus. Duis id massa bibendum, sodales sem non, pretium enim. Nam bibendum
                            , tortor gravida cursus tristique, mi dolor imperdiet libero, nec finibus ipsum orci a ante
                            . Nunc sollicitudin purus ac nulla laoreet vulputate.
                            <br/>


                        </p>
                    </Col>
                </Row>

            </Container>


        </div>
    )
}
export default WorkDescription