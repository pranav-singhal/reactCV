import React, {useState} from 'react';

import {CSSTransition} from "react-transition-group";
import WorkDescription from "./WorkDescription";

const WorkTab = (props) => {
    const [showWorkDescription, setShowWorkDescription] = useState(false);
    return (
        <>
            <div className={'work-tab'} onClick={() => {
                setShowWorkDescription(true)
            }}>
                <h1>Split Me Up</h1>
                <p>
                    It is an attempt to create a trustless method to backup private keys using Shamir’s Secret Sharing
                    Algorithm.
                    It started as a hack for EthIndia and we are finally able to launch a private alpha for our app
                </p>
            </div>

                <CSSTransition classNames={'work-description'}  unmountOnExit in={showWorkDescription} timeout={300}>

                    <WorkDescription closeModal={() =>{setShowWorkDescription(false)}} title={props.title}/>
                </CSSTransition>
        </>
    )
}

export default WorkTab