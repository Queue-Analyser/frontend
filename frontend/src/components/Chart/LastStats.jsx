import { Typography } from '@mui/material';
import React from 'react';
import stats from '../../image/stats.png'
import styles from '../../styles/MainPage.module.css'

const LastStats = (props) => {
    const amount = props.amount
    const time = props.time

    return (
            <Typography className={styles.inline}>
                <img className={styles.icon} alt="example" src={stats}></img>
                {props.text}: {amount} ({time})
            </Typography>
    );
};

export default LastStats;