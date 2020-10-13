import React from 'react';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import SendIcon from '@material-ui/icons/Send';
import InstagramIcon from '@material-ui/icons/Instagram';
import RoomIcon from '@material-ui/icons/Room';
import { Button } from '@material-ui/core';

const Footer = () => {
    const sendEmail = () => {
        window.open('mailto:jake@thefitexperience.com');
    }
    const instagramPage = () => {
        window.open( "https://www.instagram.com", "_blank");
    }
    return (
        <div style={{padding:20}}>
            <Grid container spacing={5}>
                <Grid item xs={4} style={{background:'#79bdf2',display:'flex'}} justify="center" alignItems="center">
                    <Tooltip title="Send us an email!" placement="top">
                        <Button style={{boxShadow:'none'}} onClick={sendEmail}>
                            <SendIcon style={{color:'#fff'}} />
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item xs={4} style={{background:'#5b8eb5',display:'flex'}} justify="center" alignItems="center">
                    <Tooltip title="Located in Boulder, CO" placement="top">
                        <RoomIcon style={{color:'#fff'}} />
                    </Tooltip>
                </Grid>
                <Grid item xs={4} style={{background:'#1e2f3d',display:'flex'}} justify="center" alignItems="center">
                    <Tooltip title="Visit our Instagram page" placement="top">
                        <Button style={{boxShadow:'none'}} onClick={instagramPage}>
                            <InstagramIcon style={{color:'#fff'}} />
                        </Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer;