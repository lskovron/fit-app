import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import FormLabel from '@material-ui/core/FormLabel';

import { useStateValue } from '../../state';

const useStyles = makeStyles((theme)=>({
    questionContainer: {
        margin: '30px 0 50px',
        '& .MuiFormLabel-root.Mui-focused': {
            color: 'rgba(0, 0, 0, 0.54)'
        }
    },
    question: {
        fontWeight: 700,
        display: 'block',
        paddingBottom: 15
    }
}))

const Question = ({text,reverse,subdimension,dimension,index,totalQs,setCanContinue}) => {
    const classes = useStyles();
    const [{answers},setState] = useStateValue();

    const [answer,setAnswer] = useState(0);
    const selectAnswer = e => {
        if(e.target.value){
            let ans = e.target.value;
            if(e.target.value!=="skip"){
                ans = parseInt(e.target.value)
            }
            setAnswer(ans);
            saveAnswer(ans);
        }
    }

    const questionCheck = ansArray => {
        if(ansArray.length === totalQs && !ansArray.includes(undefined)){
            setCanContinue(true)
        }
    }

    const saveAnswer = score => {
        let answerObj = {...answers};
        answerObj[dimension][subdimension][index] = score;
        setState({answers:answerObj});
        questionCheck(answerObj[dimension][subdimension])
    }

    useEffect(()=>{
        setAnswer(0);
    }, [subdimension,dimension])

    return (
        <div className={classes.questionContainer}>  
            <FormControl component="fieldset">
                <FormLabel component="legend" className={classes.question}>{text}</FormLabel>
                <RadioGroup row aria-label="Marital Status" name="marital" value={answer} onChange={selectAnswer}>
                    <FormControlLabel labelPlacement="top" value={reverse ? 5 : 1} control={<Radio />} label="1" />
                    <FormControlLabel labelPlacement="top" value={reverse ? 4 : 2} control={<Radio />} label="2" />
                    <FormControlLabel labelPlacement="top" value={reverse ? 3 : 3} control={<Radio />} label="3" />
                    <FormControlLabel labelPlacement="top" value={reverse ? 2 : 4} control={<Radio />} label="4" />
                    <FormControlLabel labelPlacement="top" value={reverse ? 1 : 5} control={<Radio />} label="5" />
                    <strong style={{margin: 20,marginBottom:0,fontStyle: 'italic'}}>  or  </strong>
                    <FormControlLabel labelPlacement="top" value="skip" control={<Radio />} label={`I prefer not to answer`} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Question;