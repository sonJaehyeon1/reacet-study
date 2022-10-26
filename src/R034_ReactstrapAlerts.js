import React, { Component } from 'react';
import { Alert, UncontrolledAlert } from 'reactstrap';

class R034_ReactstrapAlerts extends Component{
    render(){
        return(
            <div>
                <Alert color="dark">
                    Simple Alert [color : dark]
                </Alert>
                <UncontrolledAlert color = "warning">
                    UncontrolledAlert [color : warning]
                </UncontrolledAlert>
            </div>
        )
    }
}

export default R034_ReactstrapAlerts;