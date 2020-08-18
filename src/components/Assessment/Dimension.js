import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { useStateValue } from '../../state';
import { ASSESSMENT_ORDER } from '../../constants.js'
import Question from './Question';
import { withRouter } from 'react-router';

const Dimension = ({history,currentDimensionIndex,setCurrentDimensionIndex}) => {
    const [{answers}, setState] = useStateValue();

    const currentDimension = ASSESSMENT_ORDER[currentDimensionIndex];
    const [subdimentions, setSubdimentions] = useState(null);
    const [currentSubdimentionIndex, setCurrentSubdimentionIndex] = useState(0);
    const [canContinue, setCanContinue] = useState(false);

    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchQuestions();
    },[currentDimension])

    const nextSection = () => {
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
        let url = `http://localhost:8888/fit-backend/wp-json/wp/v2/${currentDimension}?orderby=menu_order&order=asc`;
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
                    <h2>{subdimentions[currentSubdimentionIndex].title.rendered}</h2>
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
                        <button disabled={!canContinue} onClick={nextSection}>Next one!</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default withRouter(Dimension);