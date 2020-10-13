import React, { useState, useRef, useEffect } from 'react';
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
import SubFooter from './SubFooter';
import Footer from './Footer';
import Header from './Header';

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
    }
}))

const DemoFields = ({history}) => {
    const classes = useStyles();
    // eslint-disable-next-line
    const [{},setState] = useStateValue();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(''); 
    const [income, setIncome] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [family, setFamily] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [education, setEducation] = useState('');
    const [language, setLanguage] = useState('');
    const [error, setError] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidName, setInvalidName] = useState(false);
    const [gender, setGender] = useState('');
    const [employment, setEmployment] = useState('');
    const [marital, setMarital] = useState('');
    const [location, setLocation] = useState('');

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
                marital,
                family,
                ethnicity,
                education,
                language,
                employment,
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
                    <FormLabel component="legend">Gender</FormLabel>
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
                <div className={classes.formControl}>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Ethnicity (optional)</FormLabel>
                    <RadioGroup aria-label="ethnicity" name="ethnicity" value={ethnicity} onChange={(event)=>setEthnicity(event.target.value)}>
                        <FormControlLabel value="caucasian" control={<Radio />} label="Caucasian" />
                        <FormControlLabel value="african-american" control={<Radio />} label="African American" />
                        <FormControlLabel value="latino-hispanic" control={<Radio />} label="Latino or Hispanic" />
                        <FormControlLabel value="asian" control={<Radio />} label="Asian" />
                        <FormControlLabel value="native-american" control={<Radio />} label="Native American" />
                        <FormControlLabel value="islander" control={<Radio />} label="Native Hawaiian or Pacific Islander" />
                        <FormControlLabel value="two-or-more" control={<Radio />} label="Two or More" />
                        <FormControlLabel value="other" control={<Radio />} label="Other/Unknown" />
                        <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Annual Household Income (optional)</FormLabel>
                    <RadioGroup aria-label="income" name="income" value={income} onChange={(event)=>setIncome(event.target.value)}>
                        <FormControlLabel value="less-25" control={<Radio />} label="Less than $25,000" />
                        <FormControlLabel value="26-50" control={<Radio />} label="$26,000-$50,000" />
                        <FormControlLabel value="51-100" control={<Radio />} label="$51,000-$100,000" />
                        <FormControlLabel value="101-150" control={<Radio />} label="$101,00-$150,000" />
                        <FormControlLabel value="151-200" control={<Radio />} label="$151,000-$200,000" />
                        <FormControlLabel value="more-200" control={<Radio />} label="More than $200,000" />
                        <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                    </RadioGroup>
                </FormControl>
                </div>
                <div className={classes.formControl} style={{margin: '0 -10px 0px'}}>
                <TextField variant="outlined" placeholder="ex: Boulder, CO, USA" label="Location (optional)" style={{width:'95%'}} error={invalidName} value={location} onChange={(event)=>setLocation(event.target.value)}></TextField>
                    <TextField variant="outlined" label="Height (optional)" value={height} placeholder={`ex: 6'1"`} onChange={(event)=>setHeight(event.target.value)}></TextField>
                    <TextField variant="outlined" label="Weight (optional)" value={weight}  placeholder={`ex: 150 pounds`}onChange={(event)=>setWeight(event.target.value)}></TextField>
                </div>
                <div className={classes.formControl}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Marital Status (optional)</FormLabel>
                        <RadioGroup aria-label="Marital Status" name="marital" value={marital} onChange={(event)=>setMarital(event.target.value)}>
                            <FormControlLabel value="single" control={<Radio />} label="Single" />
                            <FormControlLabel value="married" control={<Radio />} label="Married" />
                            <FormControlLabel value="divorced" control={<Radio />} label="Divorced" />
                            <FormControlLabel value="widowed" control={<Radio />} label="Widowed" />
                            <FormControlLabel value="domestic-partnership" control={<Radio />} label="Domestic partnership" />
                            <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>
                    </FormControl>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Family and Dependents (optional)</FormLabel>
                        <RadioGroup aria-label="family" name="family" value={family} onChange={(event)=>setFamily(event.target.value)}>
                            <FormControlLabel value="none" control={<Radio />} label="None" />
                            <FormControlLabel value="1" control={<Radio />} label="1" />
                            <FormControlLabel value="2-4" control={<Radio />} label="2-4" />
                            <FormControlLabel value="4+" control={<Radio />} label="More than 4" />
                            <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className={classes.formControl}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Education (optional)</FormLabel>
                        <RadioGroup aria-label="Education" name="education" value={education} onChange={(event)=>setEducation(event.target.value)}>
                            <FormControlLabel value="some-high-school" control={<Radio />} label="Some High School" />
                            <FormControlLabel value="high-school" control={<Radio />} label="High School" />
                            <FormControlLabel value="bachelor" control={<Radio />} label="Bachelor's Degree" />
                            <FormControlLabel value="masters" control={<Radio />} label="Master's Degree" />
                            <FormControlLabel value="phd" control={<Radio />} label="Ph. D or higher" />
                            <FormControlLabel value="trade-school" control={<Radio />} label="Trade School" />
                            <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>
                    </FormControl>

                    <FormControl component="fieldset">
                        <FormLabel component="legend">Employment (optional)</FormLabel>
                        <RadioGroup aria-label="employment" name="employment" value={employment} onChange={(event)=>setEmployment(event.target.value)}>
                            <FormControlLabel value="full-time" control={<Radio />} label="Employed Full-Time" />
                            <FormControlLabel value="part-time" control={<Radio />} label="Employed Part-Time" />
                            <FormControlLabel value="seeking" control={<Radio />} label="Seeking Opportunities" />
                            <FormControlLabel value="retired" control={<Radio />} label="Retired" />
                            <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>
                    </FormControl>
                </div>

                <div className={classes.formControl}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Language (optional)</FormLabel>
                        <RadioGroup aria-label="language" name="language" value={language} onChange={(event)=>setLanguage(event.target.value)}>
                            <FormControlLabel value="english" control={<Radio />} label="English" />
                            <FormControlLabel value="spanish" control={<Radio />} label="Spanish" />
                            <FormControlLabel value="portugese" control={<Radio />} label="Portugese" />
                            <FormControlLabel value="french" control={<Radio />} label="French" />
                            <FormControlLabel value="mandarin" control={<Radio />} label="Mandarin" />
                            <FormControlLabel value="arabic" control={<Radio />} label="Arabic" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="n-a" control={<Radio />} label="Prefer not to say" />
                        </RadioGroup>
                    </FormControl>
                </div>
                {error && <Typography style={{color:'#f44336'}}>{error}</Typography>}
                <br/>
                <Button variant="contained" type="submit" className={classes.button}>Continue</Button>
            </form>
            <SubFooter />
            <Footer />
        </>
    )
}

export default withRouter(DemoFields);