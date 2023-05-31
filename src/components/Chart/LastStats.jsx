import React from 'react';
import { Box, Typography } from '@mui/material';
import stats from '../../image/stats.png';
import styles from '../../styles/MainPage.module.css';
import { get_fill } from '../../utils/get_fill';
import { formatTime } from '../../utils/date_format';


const LastStats = (props) => {
  const { amount, time, text } = props;
  const formattedTime = formatTime(time);

  return (
    <Box>
      <Box className={styles.inline}>
        <img className={styles.icon} alt="example" src={stats} />
        {text}:
        <Box color={get_fill(amount)}>{'\u00A0'}{amount}</Box> 
      </Box>
      <Typography>Время обновления: {formattedTime}</Typography>
    </Box>
  );
};

export default LastStats;
