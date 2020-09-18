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
                <Grid item sm={1}></Grid>
                <Grid item sm={3}>

                </Grid>
                <Grid item sm={3}>
                    <img src={Logo} alt="logo" className={classes.logo} />
                </Grid>
                <Grid item sm={3}>

                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>
        </div>
    );
}

export default SubFooter;