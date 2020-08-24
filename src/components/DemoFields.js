import React, { useState, useRef } from 'react';
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

import { useStateValue } from '../state'; 

const useStyles = makeStyles(()=>({
    form: {
        '& .MuiFormControl-root': {
            width: '45%',
            marginRight: '5%',
            marginBottom: 20,
            '@media(max-width:480px)':{
                width:'100%'
            }
        }
    }
}))

const DemoFields = ({history}) => {
    const classes = useStyles();
    const [{},setState] = useStateValue();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(''); 
    const [income, setIncome] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [error, setError] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [gender, setGender] = useState('female');
    const [occupation, setOccupation] = useState('student');
    const [marital, setMarital] = useState('single');

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if( invalidName || invalidEmail){
            console.log('erre')
            setError('Please fix the highlighted field(s) above')
            if( invalidName ){
                if(nameRef.current){
                    nameRef.current.focus()
                }
            }
            if( invalidEmail ){
                if(emailRef.current){
                    emailRef.current.focus()
                } 
            }
            return;
        } else {
            setState({
                name,
                email,
                age,
                income,
                weight,
                height,
                gender,
                occupation,
                marital
            })
            history.push('/assessment');
        }
    }

    const validateEmail = () => {
        const emailRegx=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        setInvalidEmail(!emailRegx.test(email));
    }

    const validateName = () => {
        setInvalidName(name === '');
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <h1>Your info</h1>
            <div className={classes.formControl}>
                <TextField variant="outlined" required={true} ref={nameRef} label="Name" error={invalidName} value={name} onChange={(event)=>setName(event.target.value)} onBlur={validateName}></TextField>
                <TextField variant="outlined" required={true} ref={emailRef} label="Email" error={invalidEmail} helperText={invalidEmail ? "Invalid entry." : ""} value={email} onChange={(event)=>setEmail(event.target.value)} onBlur={validateEmail}></TextField>
            </div> 
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(event)=>setGender(event.target.value)}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="no-answer" control={<Radio />} label="I prefer not to answer" />
                </RadioGroup>
            </FormControl>
            <div className={classes.formControl}>
                <TextField variant="outlined" label="Age (optional)" value={age} onChange={(event)=>setAge(event.target.value)}></TextField>
                <TextField variant="outlined" label="Annual Household Income (optional)" value={income} onChange={(event)=>setIncome(event.target.value)}></TextField>
            </div>
            <div className={classes.formControl}>
                <TextField variant="outlined" label="Height (optional)" value={height} onChange={(event)=>setHeight(event.target.value)}></TextField>
                <TextField variant="outlined" label="Weight (optional)" value={weight} onChange={(event)=>setWeight(event.target.value)}></TextField>
            </div>
            <div className={classes.formControl}>
                <br></br>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Occupation</FormLabel>
                    <RadioGroup aria-label="Occupation" name="occupation" value={occupation} onChange={(event)=>setOccupation(event.target.value)}>
                        <FormControlLabel value="student" control={<Radio />} label="Student" />
                        <FormControlLabel value="professional" control={<Radio />} label="Professional" />
                        <FormControlLabel value="retiree" control={<Radio />} label="Retiree" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

                <FormControl component="fieldset">
                    <FormLabel component="legend">Marital Status</FormLabel>
                    <RadioGroup aria-label="Marital Status" name="marital" value={marital} onChange={(event)=>setMarital(event.target.value)}>
                        <FormControlLabel value="single" control={<Radio />} label="Single" />
                        <FormControlLabel value="married" control={<Radio />} label="Married" />
                        <FormControlLabel value="living-with-so" control={<Radio />} label="Living with significant other" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>

            </div>
            {error && <Typography style={{color:'#f44336'}}>{error}</Typography>}
            <br/>
            <Button variant="contained" type="submit">Continue</Button>
        </form>
    )
}

export default withRouter(DemoFields);