import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { useStateValue } from '../../state';

const useStyles = makeStyles((theme)=>({
    star: {

    },
    starFilled: {
        background: 'gold'
    }
}))

const Question = ({text,reverse,subdimension,dimension,index,totalQs,setCanContinue}) => {
    const classes = useStyles();
    const [{answers},setState] = useStateValue();

    const [star,setStar] = useState(0);
    const [answer,setAnswer] = useState(0);
    const selectAnswer = e => {
        setAnswer(e.target.value);
        saveAnswer(e.target.value);
    }

    const questionCheck = ansArray => {
        if(ansArray.length === totalQs && !ansArray.includes(undefined)){
            setCanContinue(true)
        }
    }

    const saveAnswer = score => {
        let answerObj = {...answers};
        answerObj[dimension][subdimension][index] = parseInt(score);
        setState({answers:answerObj});
        questionCheck(answerObj[dimension][subdimension])
    }

    useEffect(()=>{
        setStar(0);
        setAnswer(0);
    }, [subdimension,dimension])

    return (
        <>  
            <p>{text}</p>
            <div style={{display:'inline-block'}} onMouseLeave={()=>setStar(0)} onClick={selectAnswer}>
                <button value={reverse ? 5 : 1} onMouseEnter={() => setStar(1)} className={`${classes.star} ${ ( (!reverse && (star > 0 || answer > 0)) || (reverse && ((star && star > 0) || (answer && answer < 6))) ) ? classes.starFilled : ''}`}>o</button>
                <button value={reverse ? 4 : 2} onMouseEnter={() => setStar(2)} className={`${classes.star} ${( (!reverse && (star > 1 || answer > 1)) || (reverse && ((star && star > 1) || (answer && answer < 5))) ) ? classes.starFilled : ''}`}>o</button>
                <button value={reverse ? 3 : 3} onMouseEnter={() => setStar(3)} className={`${classes.star} ${( (!reverse && (star > 2 || answer > 2)) || (reverse && ((star && star > 2) || (answer && answer < 4))) ) ? classes.starFilled : ''}`}>o</button>
                <button value={reverse ? 2 : 4} onMouseEnter={() => setStar(4)} className={`${classes.star} ${( (!reverse && (star > 3 || answer > 3)) || (reverse && ((star && star > 3) || (answer && answer < 3))) ) ? classes.starFilled : ''}`}>o</button>
                <button value={reverse ? 1 : 5} onMouseEnter={() => setStar(5)} className={`${classes.star} ${( (!reverse && (star > 4 || answer > 4)) || (reverse && ((star && star > 4) || (answer && answer < 2))) ) ? classes.starFilled : ''}`}>o</button>
            </div>
        </>
    )
}

export default Question;