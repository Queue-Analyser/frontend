import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { get_fill } from '../../utils/get_fill';
import { Box } from '@mui/material';
import { formatTime } from '../../utils/date_format';

import styles from '../../styles/Chart.module.css';

export default function Chart(props) {
  const text = props.text
  const data = props.data?.map((item) => ({
    ...item,
    time: formatTime(item.time),
  }));

  return (
      <Box className={styles.chart}>
        <Box>{text}</Box>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
          barCategoryGap={1}
        >
          <XAxis dataKey="time" />
          <YAxis domain={[0, 10]}/>
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Bar dataKey="amount" fill="orange" isAnimationActive={false}>
            {data?.map((el, index) => (
              <Cell key={`cell-${index}`} fill={get_fill(el['amount'])} />
            ))}
          </Bar>
          <Tooltip />
        </BarChart>
      </Box>

  )
}
