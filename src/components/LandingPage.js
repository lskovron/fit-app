import React from 'react';
import { withRouter } from 'react-router';

const LandingPage = ({history}) => {
    return (
        <>
            <h1>Welcome</h1>
            <button onClick={()=>{history.push('/assessment')}}>Begin!</button>
        </>
    )
}

export default withRouter(LandingPage);