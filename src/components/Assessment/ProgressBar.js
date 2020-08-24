import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ASSESSMENT_ORDER } from '../../constants.js'

const useStyles = makeStyles(()=>({
    progressWrapper: {
        display: 'block',
        textAlign: 'center'
    },
    progressSegment: {
        display: 'inline-block',
        width: '17%',
        margin: '0 1%',
        height: 5,
        background: '#ccc'
    },
    cog: {background:'#c5e3fa'},
    emo: {background:'#79bdf2'},
    phy: {background:'#1e7ce1'},
    fin: {background:'#0140c9'},
    spi: {background:'#02188d'}
}))

const ProgressBar = ({currentDimensionIndex}) => {
    const classes = useStyles();

    console.log(classes.dimColors);

    return (
        <div className={classes.progressWrapper}>
            {ASSESSMENT_ORDER.map((dim,i)=>{
                return (
                    <div key={i} className={`${classes.progressSegment}
                    ${i===0 && currentDimensionIndex >= i 
                    ? classes.cog : i===1 && currentDimensionIndex >= i
                    ? classes.emo : i===2 && currentDimensionIndex >= i
                    ? classes.phy : i===3 && currentDimensionIndex >= i 
                    ? classes.fin : i===4 && currentDimensionIndex >= i 
                    ? classes.spi : ''}`}>

                    </div>
                )
            })}
        </div>
    )
}

export default ProgressBar;