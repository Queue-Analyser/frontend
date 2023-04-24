import { Typography } from '@mui/material';
import React from 'react';
import stats from '../../image/stats.png'
import styles from '../../styles/MainPage.module.css'

const LastStats = (props) => {
    const allStats = props.allStats
    return (
        <div>
            <Typography className={styles.inline}>
                <img className={styles.icon} alt="example" src={stats}></img>
                <>{allStats}</> 
            </Typography>
        </div>
    );
};

export default LastStats;