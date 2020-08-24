import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStateValue } from '../../state';
import { ASSESSMENT_ORDER } from '../../constants.js'
import Question from './Question';
import { withRouter } from 'react-router';
import { Button } from '@material-ui/core';
import { postsUrl } from '../Config';

const Dimension = ({history,currentDimensionIndex,setCurrentDimensionIndex}) => {
    const [{answers}] = useStateValue();

    const currentDimension = ASSESSMENT_ORDER[currentDimensionIndex];
    const [subdimentions, setSubdimentions] = useState(null);
    const [currentSubdimentionIndex, setCurrentSubdimentionIndex] = useState(0);
    const [canContinue, setCanContinue] = useState(false);

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchQuestions();
        // eslint-disable-next-line
    },[currentDimension])

    const nextSection = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
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
            console.log(response);
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
                    <p style={{fontStyle:'italic',fontSize:12}}>
                    There are no right or wrong answers so please answer these candidly.  Please rate how true
                    the following statements are for you on a scale of 1-5:</p>
                    <p style={{fontStyle:'italic',fontSize:12,textAlign:'center'}}>
                    <b>1</b> = absolutely untrue; <b>2</b> = Mostly untrue; <b>3</b> = neither true nor untrue; <b>4</b> = Mostly true; <b>5</b> = absolutely
                    true
                    </p>
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
                        <Button variant="contained" disabled={!canContinue} onClick={nextSection}>Continue</Button>
                    </div>
                </>
            )}
        </div>
    );
}

export default withRouter(Dimension);