import React from 'react';
import { Typography } from '@mui/material';
import stats from '../../image/stats.png';
import styles from '../../styles/MainPage.module.css';

const LastStats = (props) => {
  const { amount, time, text } = props;

  return (
    <Typography className={styles.inline}>
      <img className={styles.icon} alt="example" src={stats} />
      {text}: {amount} ({time})
    </Typography>
  );
};

export default LastStats;
