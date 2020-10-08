import React, { useState } from 'react';
import { withRouter } from 'react-router';
import Footer from '../Footer';
import Header from '../Header';
import SubFooter from '../SubFooter';
import Scale from '../../assets/scale.png';
import { ASSESSMENT_ORDER, COLORS } from '../../constants.js'

import Dimension from './Dimension';
import ProgressBar from './ProgressBar';

const Questionnaire = () => {
    const [currentDimensionIndex,setCurrentDimensionIndex] = useState(0);

    return (
        <>
            <Header />
            <div style={{padding: 40,paddingTop:0}}>
                <h1 style={{textAlign:'center',marginBottom:30}}>Assessment</h1>
                <h2 style={{
                    display: 'none',
                    textAlign: 'center',
                    fontFamily: 'Open Sans, lato, sans-serif',
                    fontSize: '1.8rem',
                    margin: '50px 0',
                    color: COLORS[ASSESSMENT_ORDER[currentDimensionIndex]][6]
                }}>{ASSESSMENT_ORDER[currentDimensionIndex].toUpperCase()}</h2>
                <ProgressBar currentDimensionIndex={currentDimensionIndex} />
                <p style={{fontSize:18,lineHeight:1.5,margin:'30px 20px',textAlign:'center'}}>There are no right or wrong answers. Try to answer candidly.  Please rate how true the following statements are for you on a scale of 1-5:</p>
                <img src={Scale} alt="rating scale" style={{maxWidth:'100%',marginBottom:30}} />
                <Dimension currentDimensionIndex={currentDimensionIndex} setCurrentDimensionIndex={setCurrentDimensionIndex} />
            </div>
            <SubFooter />
            <Footer />
        </>
    )
}

export default withRouter(Questionnaire);