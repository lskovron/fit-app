import React from 'react';
import Grid from '@material-ui/core/Grid';
import Logo from '../assets/logo.png';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(()=>({
    logo: { width: 200, maxWidth: '100%' },

}))
const SubFooter = () => {
    const classes = useStyles();

    return (
        <div style={{padding:20}}>
            <Grid container spacing={5} style={{background: '#f9fcfe'}}>
                <Grid item xs={12} sm={4} style={{alignItems: 'flex-end',justifyContent: 'center',display: 'flex',flexDirection: 'column',position:'relative'}}>
                    <p style={{margin:0}}>Learn More at</p>
                    <a href="#/" style={{textDecoration:'none',color:'#576a7c'}}><strong>TheFitExperience.com</strong></a>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,textAlign:'center'}}><p style={{margin:0,fontSize:12,color:'#a0a9b3'}}>@2020 The Fit Experience</p></div>
                </Grid>
                <Grid item xs={12} sm={4} style={{textAlign: 'center'}}>
                    <img src={Logo} alt="logo" className={classes.logo} />
                </Grid>
                <Grid item xs={12} sm={4} style={{alignItems: 'flex-start',justifyContent: 'center',display: 'flex',flexDirection: 'column',position:'relative'}}>
                    <p style={{margin:0}}>An Operating</p>
                    <p style={{textDecoration:'none',color:'#576a7c',margin:0}}><strong>Philosophy For Life</strong></p>
                    <div style={{position:'absolute',bottom:0,left:0,right:0,textAlign:'center'}}><a href="#/" style={{margin:0,fontSize:12,textDecoration:'none',color:'#a0a9b3'}}>Terms and Conditions</a></div>
                </Grid>
            </Grid>
        </div>
    );
}

export default SubFooter;