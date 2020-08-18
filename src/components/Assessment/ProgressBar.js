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
    filledIn: {
        background: 'red'
    }
}))

const ProgressBar = ({currentDimensionIndex}) => {
    const classes = useStyles();

    return (
        <div className={classes.progressWrapper}>
            {ASSESSMENT_ORDER.map((dim,i)=>{
                return (
                    <div key={i} className={`${classes.progressSegment} ${currentDimensionIndex >= i && classes.filledIn}`}>

                    </div>
                )
            })}
        </div>
    )
}

export default ProgressBar;