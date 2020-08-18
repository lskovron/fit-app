import React, { useState } from 'react';
import { withRouter } from 'react-router';

import Dimension from './Dimension';
import { useStateValue } from '../../state';
import ProgressBar from './ProgressBar';

const Questionnaire = () => {
    const [{}, ] = useStateValue();

    const [currentDimensionIndex,setCurrentDimensionIndex] = useState(0);

    return (
        <>
            <ProgressBar currentDimensionIndex={currentDimensionIndex} />
            <Dimension currentDimensionIndex={currentDimensionIndex} setCurrentDimensionIndex={setCurrentDimensionIndex} />
        </>
    )
}

export default withRouter(Questionnaire);