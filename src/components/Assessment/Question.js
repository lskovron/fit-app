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
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color:'#79bdf2'
        },
        '& .MuiIconButton-colorSecondary:hover': {
            background: 'rgba(121, 189, 242,.08)'
        }
    },
    question: {
        fontWeight: 700,
        display: 'block',
        paddingBottom: 15,
        fontSize: 22,
        color: '#576a7c'
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
            <FormControl component="fieldset" style={{display:'block'}}>
                <FormLabel component="legend" className={classes.question}>{index+1}. {text}</FormLabel>
                <RadioGroup row aria-label="Marital Status" name="marital" value={answer} onChange={selectAnswer}>
                    <FormControlLabel labelPlacement="bottom" value={reverse ? 5 : 1} control={<Radio />} label="1" />
                    <FormControlLabel labelPlacement="bottom" value={reverse ? 4 : 2} control={<Radio />} label="2" />
                    <FormControlLabel labelPlacement="bottom" value={reverse ? 3 : 3} control={<Radio />} label="3" />
                    <FormControlLabel labelPlacement="bottom" value={reverse ? 2 : 4} control={<Radio />} label="4" />
                    <FormControlLabel labelPlacement="bottom" value={reverse ? 1 : 5} control={<Radio />} label="5" />
                    <div style={{margin:'25px 40px 0px',flexGrow:1,borderTop:'1px solid #a0a9b3'}}></div>
                    <FormControlLabel labelPlacement="bottom" value="skip" control={<Radio />} label={`n/a`} />
                </RadioGroup>
            </FormControl>
        </div>
    )
}

export default Question;