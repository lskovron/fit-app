import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import cog from '../../assets/cog.svg';
import emo from '../../assets/emo.svg';
import phy from '../../assets/phy.svg';
import fin from '../../assets/fin.svg';
import spi from '../../assets/spi.svg';
import { ASSESSMENT_ORDER } from '../../constants.js'
import { useStateValue } from '../../state';

const useStyles = makeStyles(()=>({
    progressWrapper: {
        display: 'block',
        textAlign: 'center'
    },
    totalProgress: {
        textAlign: 'right',
        fontFamily: 'Open Sans Condensed,Open Sans, sans-serif',
        fontSize: 17,
        marginRight: '8%'
    },
    progressSegment: {
        display: 'inline-block',
        width: '17%',
        margin: '0 1%',
        height: 5,
        // background: '#ccc',
        '& img': {
            filter: 'grayscale(1)',
            opacity: .4,
            width: 70,
            maxWidth: '100%'
        }
    },
    cog: {
        // background:'#c5e3fa',
        '& img': {
            filter: 'none',
            opacity: 1,
        }
    },
    emo: {
        // background:'#79bdf2',
        '& img': {
            filter: 'none',
            opacity: 1,
        }
    },
    phy: {
        // background:'#1e7ce1',
        '& img': {
            filter: 'none',
            opacity: 1,
        }
    },
    fin: {
        // background:'#0140c9',
        '& img': {
            filter: 'none',
            opacity: 1,
        }
    },
    spi: {
        // background:'#02188d',
        '& img': {
            filter: 'none',
            opacity: 1,
        }
    }
}))

const ProgressBar = ({currentDimensionIndex}) => {
    const classes = useStyles();
    const [{progress}] = useStateValue();

    const percentageProgress = (progress*100)/29;

    return (
        <div className={classes.progressWrapper}>
            <div className={classes.totalProgress}>{parseInt(percentageProgress)}% complete</div>
            {ASSESSMENT_ORDER.map((dim,i)=>{
                return (
                    <div key={i} className={`${classes.progressSegment}
                    ${i===0 && currentDimensionIndex >= i 
                    ? classes.cog : i===1 && currentDimensionIndex >= i
                    ? classes.emo : i===2 && currentDimensionIndex >= i
                    ? classes.phy : i===3 && currentDimensionIndex >= i 
                    ? classes.fin : i===4 && currentDimensionIndex >= i 
                    ? classes.spi : ''}`}>
                        { i === 0 && <img src={cog} alt="dimension logo" />}
                        { i === 1 && <img src={phy} alt="dimension logo" />}
                        { i === 2 && <img src={fin} alt="dimension logo" />}
                        { i === 3 && <img src={emo} alt="dimension logo" />}
                        { i === 4 && <img src={spi} alt="dimension logo" />}    
                    </div>
                )
            })}
        </div>
    )
}

export default ProgressBar;