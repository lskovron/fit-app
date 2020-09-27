import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStateValue } from '../../state';
import { ASSESSMENT_ORDER } from '../../constants.js'
import Question from './Question';
import { withRouter } from 'react-router';
import { Button, makeStyles } from '@material-ui/core';
import { postsUrl } from '../Config';

const useStyles = makeStyles(()=>({
    button: {
        display: 'block',
        margin: '0 auto',
        fontSize: 35,
        fontFamily: 'Libre Baskerville,serif',
        padding: '0 50px',
        borderRadius: 20,
        color: 'white',
        textTransform: 'none',
        fontWeight: 700,
        background: '#79bdf2',
        '&:hover': {
            background: '#1e7ce1'
        },
        '&:disabled': {
            background:'#a0a9b3',
            color: 'white',
        },
        marginBottom: 50
    }
}))

const Dimension = ({history,currentDimensionIndex,setCurrentDimensionIndex}) => {
    const [{answers,progress},setState] = useStateValue();
    const classes = useStyles();

    const currentDimension = ASSESSMENT_ORDER[currentDimensionIndex];
    const [subdimentions, setSubdimentions] = useState(null);
    const [currentSubdimentionIndex, setCurrentSubdimentionIndex] = useState(0);
    const [canContinue, setCanContinue] = useState(false);

    const [loading, setLoading] = useState(true)

    const scrollToTop = (pxOffset = 0) => {
        window.scrollTo({
            top: pxOffset,
            left: 0,
            behavior: 'smooth'
        });
    }

    useEffect(()=>{
        fetchQuestions();
        scrollToTop();
        // eslint-disable-next-line
    },[currentDimension])

    const nextSection = () => {
        scrollToTop(200);
        setState({progress: progress+1});

        setCanContinue(false);
        if( subdimentions.length > currentSubdimentionIndex + 1){
            setCurrentSubdimentionIndex(currentSubdimentionIndex+1);
        } else if (ASSESSMENT_ORDER.length > currentDimensionIndex+1) {
            setCurrentDimensionIndex(currentDimensionIndex+1)
        } else {
            history.push('/results');
        }
    }

    const fetchQuestions = () => {
        setLoading(true);
        let url = `${postsUrl}/wp-json/wp/v2/${currentDimension}?orderby=menu_order&order=asc`;
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json() )
        .then( response => {
            setLoading(false);
            setCurrentSubdimentionIndex(0);
            setSubdimentions(response);
            setupAnswerObj(response);
        })
        .catch( error => {
            setLoading(false);
            console.log(error);
        })

        const setupAnswerObj = response => {
            let answerObj = {...answers};
            response.forEach(sub => {
                answerObj[currentDimension][sub.slug] = []
            });
        }  
        
    }

    if(!subdimentions) {
        return (
            <>
                {loading ? (
                    <div>
                        <h2>Loading</h2>
                        <CircularProgress />
                    </div>
                ) : (
                    null
                )}
            </>
        )
    };

    return (
        <div>
            {loading ? (
                <div>
                    <h2>Loading</h2>
                    <CircularProgress />
                </div>
            ) : (
                <>
                    {subdimentions[currentSubdimentionIndex].acf.questions.map((q,i)=>{
                        return (
                            <Question 
                                dimension={currentDimension} 
                                subdimension={subdimentions[currentSubdimentionIndex].slug} 
                                key={i} 
                                index={i} 
                                reverse={q.reverse_sort} 
                                text={q.question} 
                                totalQs={subdimentions[currentSubdimentionIndex].acf.questions.length}
                                setCanContinue={setCanContinue}
                            />
                        );
                    })}
                    <div style={{marginTop:20}}>
                        <Button variant="contained" disabled={!canContinue} onClick={nextSection} className={classes.button}>Continue</Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default withRouter(Dimension);