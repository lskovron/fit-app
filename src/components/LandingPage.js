import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactHtmlParser from 'react-html-parser'; 

import { COLORS } from '../constants';
import cog from '../assets/cog.svg';
import emo from '../assets/emo.svg';
import fin from '../assets/fin.svg';
import phy from '../assets/phy.svg';
import spi from '../assets/spi.svg';
import Header from './Header';
import { postsUrl } from './Config';
import { makeStyles } from '@material-ui/core';
import SubFooter from './SubFooter';
import Footer from './Footer';

const useStyles = makeStyles(()=>({
    contentWrap: {
        padding: '40px 60px',
        // '[@media(max-width:768px]': {
        //     padding: 40
        // }
    },
    primaryContent: {
        marginBottom: 40,
        '& p': {
            fontSize: 20,
            lineHeight: 1.4
        }
    },
    secondaryContent: {
        '& h3': {
            fontSize: '1.5rem',
            marginBottom: 15
        },
        '& p': {
            fontSize: 20,
            lineHeight: 1.4
        },
        '& a': {
            textTransform: 'uppercase',
            fontWeight: 'bold',
            textDecoration: 'none',
            color: '#79bdf2'
        }
    },
    h2: {
        marginTop: 60,
        textAlign: 'center',
        fontSize: '1.8rem',
        '&:after': {
            content: "''",
            borderBottom: '1px solid',
            width: 60,
            display: 'block',
            margin: '20px auto'
        }
    },
    imgRow: {
        display: 'inline-block',
        textAlign: 'center',
        padding: '20px 8px 5px',
        '& span': {
            fontWeight: 700,
            fontSize: 10,
            display: 'block'
        },
        '& img': {
            width: 65,
        }
    },
    subColors: {
        fontWeight: 700,
        display: 'inline-block',
        padding: '5px 30px 8px 0',
        fontSize: 12
    },
    imgWrap: {
        paddingRight: 10,
        '& img': {
            maxWidth: 120,
            width: '90%'
        }
    },
    dimensionContent: {
        fontSize: 22,
        marginTop: 10,
        lineHeight: 1.5
    },
    subHeader: {
        fontWeight: 'bold',
        fontFamily: 'DIN Pro, lato, sans-serif',
        textTransform: 'uppercase',
        marginTop: 30,
        marginBottom: 0,
        '& span': {
            color: '#576a7c!important',
            fontFamily: 'Xaloc',
            textTransform: 'none',
        }
    },
    allSet: {
        color: '#79bdf2',
        marginTop: 60,
        textAlign: 'center',
        fontSize: '1rem',
        fontFamily: 'DIN Pro, lato, sans-serif',
        fontWeight: 900,
        '&:after': {
            content: "''",
            borderBottom: '1px solid #aaaaaa',
            width: 180,
            display: 'block',
            margin: '25px auto'
        }
    },
    continueButton: {
        display: 'block',
        margin: '0 auto',
        fontSize: 50,
        fontFamily: 'Xaloc,serif',
        padding: '0 50px',
        borderRadius: 20,
        color: 'white',
        textTransform: 'none',
        fontWeight: 700,
        background: '#79bdf2',
        '&:hover': {
            background: '#1e7ce1'
        }
    }
}))

const LandingPage = ({history}) => {
    const classes = useStyles();

    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState({})
    const [dimensionContent, setDimensionContent] = useState([])

    const numerals = ['i','ii','iii','iv','v'];

    const fetchContent = () => {
        setLoading(true);
        let url = `${postsUrl}/wp-json/wp/v2/pages/116`;
        fetch(url, {
            method: 'GET'
        })
        .then( response => response.json() )
        .then( response => {
            console.log(response);
            setLoading(false);
            setContent({
                circumplex: response.acf.circumplex,
                primary: response.content.rendered,
                secondary: response.acf.secondary_text,
            });
            setDimensionContent([
                {  
                    key: 'cognitive',
                    title: 'Cognitive',
                    img: cog,
                    content: response.acf.cognitive_description,
                    subdimensions: ["LEARNING STRATEGIES","INTELLECTUAL ENGAGEMENT","EFFORTFUL CONTROL","ATTENTION","AUTONOMY","SOCIAL COGNITION"]
                },
                {  
                    key: 'emotional',
                    title: 'Emotional',
                    img: emo,
                    content: response.acf.emotional_description,
                    subdimensions: ["CURRENT EMOTIONAL HEALTH","SELF-COMPASSION AND EMOTIONAL AWARENESS","STRESS RESILIENCE","GRATITUDE AND POSITIVITY","MINDSET","SOCIAL ENGAGEMENT"]
                },
                {  
                    key: 'financial',
                    title: 'Financial',
                    img: fin,
                    content: response.acf.financial_description,
                    subdimensions: ["LONG-TERM PERSPECTIVE","SHORT-TERM PERSPECTIVE","REDUCE SADNESS","INCREASE HAPPINESS","NON-PECUNIARY"]
                },
                {  
                    key: 'physical',
                    title: 'Physical',
                    img: phy,
                    content: response.acf.physical_description,
                    subdimensions: ["NUTRITION","NUTRITIONAL KNOWLEDGE","ACTIVITY LEVEL","AEROBIC ACTIVITY","STRENGTH TRAINING","SLEEP HABITS","SELF-IMAGE"]
                },
                { 
                    key: 'spiritual',
                    title: 'Spiritual', 
                    img: spi,
                    content: response.acf.spiritual_description,
                    subdimensions: ["CONNECTION","COMPASSION AND EMPATHY","FORGIVENESS","PURPOSE","PRESENCE"]
                }
            ])
        })
        .catch( error => {
            setLoading(false);
            console.log(error);
        })
        
    }

    useEffect(()=>{
        fetchContent();
    },[])

    return (
        <>
            <Header />
            {loading ? (
                <div className={classes.contentWrap}>
                    <h2>Loading</h2>
                    <CircularProgress />
                </div>
            ) : (
                <div className={classes.contentWrap}>  
                    <div className={classes.primaryContent}>
                        {ReactHtmlParser(content.primary) }
                    </div>
                    <Grid container className={classes.secondaryContent} spacing={5}>
                        <Grid item sm={4} style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
                            <img src={content.circumplex} alt="circumplex example image" width="100%" />
                        </Grid>
                        <Grid item sm={8}>
                            <div className={classes.imgRow}>
                                <span style={{color: COLORS.cognitive[6]}}>COGNITIVE</span>
                                <img src={cog} alt="dimension icon" />
                            </div>
                            <div className={classes.imgRow}>
                                <span style={{color: COLORS.physical[5]}}>PHYSICAL</span>
                                <img src={phy} alt="dimension icon" />
                            </div>
                            <div className={classes.imgRow}>
                                <span style={{color: COLORS.spiritual[6]}}>SPIRITUALITY</span>
                                <img src={spi} alt="dimension icon" />
                            </div>
                            <div className={classes.imgRow}>
                                <span style={{color: COLORS.emotional[6]}}>EMOTIONAL</span>
                                <img src={emo} alt="dimension icon" />
                            </div>
                            <div className={classes.imgRow}>
                                <span style={{color: COLORS.financial[6]}}>FINANCIAL</span>
                                <img src={fin} alt="dimension icon" />
                            </div>
                            {ReactHtmlParser(content.secondary) }
                        </Grid>
                    </Grid>
                    <h2 className={classes.h2}>Table of Contents</h2>
                    {dimensionContent.map((dim,i)=>(
                        <div key={i}>
                            <h3 className={classes.subHeader} style={{color:COLORS[dim.key][6]}}><span>{numerals[i]}.</span> {dim.title}</h3>
                            <Grid container spacing={2} style={{display: 'flex',flexDirection: 'row',alignItems: 'center'}}>
                                <Grid item sm={2}>
                                    <div className={classes.imgWrap}><img src={dim.img} alt="dim image" /></div>
                                </Grid>
                                <Grid item sm={10} style={{margin: '20px 0',paddingLeft:20,borderLeft: '1px solid',borderColor: COLORS[dim.key][6]}}>
                                    <p className={classes.dimensionContent}>{dim.content}</p>
                                    {dim.subdimensions.map((sub,ii)=>(
                                        <span key={ii} className={classes.subColors} style={{color:COLORS[dim.key][ii]}}>{sub}</span>
                                    ))}
                                </Grid>
                            </Grid>
                        </div>
                    ))}
                    <h3 className={classes.allSet}>ALL SET?</h3>
                    <Button className={classes.continueButton} variant="contained" onClick={()=>{history.push('/your-info')}}>Let's begin</Button>
                </div>
            )}
            <SubFooter />
            <Footer />
        </>
    )
}

export default withRouter(LandingPage);