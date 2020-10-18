import React, { useState, useRef, useEffect } from 'react';
import { withRouter } from 'react-router';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import { makeStyles } from '@material-ui/core/styles';

import { useStateValue } from '../state'; 
import SubFooter from './SubFooter';
import Footer from './Footer';
import Header from './Header';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    form: {
        padding: '0 60px 30px',
        '& h1': {
            textAlign: 'center',
            marginBottom: 45
        },
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            background: '#efefef',
            color: '#576a7c',
        },
        '& .MuiFormControl-root': {
            width: '45%',
            marginRight: '5%',
            marginBottom: 20,
            border: 0,
            '& label': {
                fontWeight: 700
            },
            '& .MuiFormLabel-asterisk': {
                color: '#79bdf2'
            },
            '& .MuiOutlinedInput-notchedOutline': {
                border: 'none'
            },
            '@media(max-width:480px)':{
                width:'100%'
            }
        },
        '& .MuiFormLabel-root': {
            fontWeight: 700,
            color: '#576a7c',
            marginBottom: 10
        },
        '& .MuiRadio-colorSecondary.Mui-checked': {
            color:'#79bdf2'
        },
        '& .MuiIconButton-colorSecondary:hover': {
            background: 'rgba(121, 189, 242,.08)'
        }
    },
    left: {
        width: '50%',
        float: 'left',
        margin: 0,
        display: 'inline-block'
    },
    right: {
        width: '50%',
        float: 'right',
        margin: 0,
        display: 'inline-block'
    },
    formControl: {paddingBottom:40},
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
        [theme.breakpoints.down('xs')]: {
            fontSize: 25
        }
    },
    fullWidth: {
        width: '100%!important'
    }
}))

const DemoFields = ({history}) => {
    const classes = useStyles();
    // eslint-disable-next-line
    const [{},setState] = useStateValue();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(''); 
    const [error, setError] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [gender, setGender] = useState('');
    const [location, setLocation] = useState('');
    const [consent, setConsent] = useState(false);

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if( invalidName || invalidEmail || !consent ){
            console.log('erre')
            if( invalidName ){
                setError('Please fix the highlighted field(s) above')
                if(nameRef.current){
                    nameRef.current.focus()
                }
            } else if( invalidEmail ){
                setError('Please fix the highlighted field(s) above')
                if(emailRef.current){
                    emailRef.current.focus()
                } 
            } else if ( !consent ){
                setError('Check the box to continue')
            }
            return;
        } else {
            setState({
                name,
                email,
                age,
                gender,
                location
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

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    },[])

    return (
        <>
            <Header />
            <form className={classes.form} onSubmit={handleSubmit}>
                <h1>Tell us about yourself</h1>
                <div className={classes.formControl} style={{margin: '0 -10px 0px'}}>
                    <TextField variant="outlined" required={true} ref={nameRef} label="Name" error={invalidName} value={name} onChange={(event)=>setName(event.target.value)} onBlur={validateName}></TextField>
                    <TextField variant="outlined" required={true} ref={emailRef} label="Email" error={invalidEmail} helperText={invalidEmail ? "Invalid entry." : ""} value={email} onChange={(event)=>setEmail(event.target.value)} onBlur={validateEmail}></TextField>
                </div> 
                <div className={classes.formControl}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender (optional)</FormLabel>
                    <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={(event)=>setGender(event.target.value)}>
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Age (optional)</FormLabel>
                    <RadioGroup style={{display:'block'}} aria-label="age" name="age" value={age} onChange={(event)=>setAge(event.target.value)}>
                        <FormControlLabel className={classes.left} value="0-15" control={<Radio />} label="0-15" />
                        <FormControlLabel className={classes.right} value="46-55" control={<Radio />} label="46-55" />
                        <FormControlLabel className={classes.left} value="16-25" control={<Radio />} label="16-25" />
                        <FormControlLabel className={classes.right} value="56-65" control={<Radio />} label="56-65" />
                        <FormControlLabel className={classes.left} value="26-35" control={<Radio />} label="26-35" />
                        <FormControlLabel className={classes.right} value="66-75" control={<Radio />} label="66-75" />
                        <FormControlLabel className={classes.left} value="36-45" control={<Radio />} label="36-45" />
                        <FormControlLabel className={classes.right} value="75+" control={<Radio />} label="75+" />
                        <FormControlLabel className={classes.left} value="n-a" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className={classes.formControl} style={{margin: '0 -10px 0px'}}>
                <TextField variant="outlined" placeholder="ex: Boulder, CO, USA" label="Location (optional)" style={{width:'95%'}} error={invalidName} value={location} onChange={(event)=>setLocation(event.target.value)}></TextField>
                </div>
                <br/>
                <div>
                    <FormControl required component="fieldset" classes={{
                        root: classes.fullWidth
                    }}>
                        <FormLabel component="legend">Consent checkbox</FormLabel>
                        <FormControlLabel
                            control={<Checkbox checked={consent} onChange={(event)=>setConsent(!consent)} name="consent" />}
                            label={
                                <div>
                                I am over the age of 18 and have read and agree to the <Link target="_blank" href="https://google.com" rel="noreferrer">terms of service</Link> and <Link target="_blank" href="https://google.com" rel="noreferrer">privacy policy</Link>.
                                </div>
                            }
                            />
                    </FormControl>
                </div>
                {error && <Typography style={{color:'#f44336',textAlign: 'center',marginBottom: 10,fontStyle: 'italic'}}>{error}</Typography>}
                <Button variant="contained" type="submit" className={classes.button}>Continue</Button>
            </form>
            <SubFooter />
            <Footer />
        </>
    )
}

export default withRouter(DemoFields);