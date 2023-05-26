import React, { useState, useEffect, useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { getCurrentValue } from '../../api/getCurrentValue';
import { getDataFromDb } from '../../api/getDataFromDb';
import { get_fill } from '../../utils/get_fill';

import styles from '../../styles/Chart.module.css';
import Stats from './Stats';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ChartDatabase = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const chart = useSelector(state => state.chart.chart);

  const updateData = async () => {
    const newDataPoint = await getCurrentValue(id);
    const updatedData = [...data.slice(-14), newDataPoint[id]];
    setData(updatedData);
  };

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      const initialData = await getDataFromDb();
      setData(initialData[id]);
    };
    fetchDataAndUpdate();
  }, [id]);

  const intervalsRef = useRef([]);

  const warmup = {
    [id]: [
      { start: '10:05:00', end: '10:15:00' },
      { start: '11:50:00', end: '12:00:00' },
      { start: '13:35:00', end: '13:50:00' },
      { start: '15:25:00', end: '15:40:00' },
      { start: '17:15:00', end: '17:25:00' },
      { start: '19:00:00', end: '19:10:00' },
    ],
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateData();
    }, 10000);
    intervalsRef.current.push(intervalId);

    return () => {
      intervalsRef.current.forEach(interval => {
        clearInterval(interval);
      });
      intervalsRef.current = [];
    };
  }, [data]);

  useEffect(() => {
    const updateDataInterval = () => {
      const currentTime = new Date().toLocaleTimeString();

      const currentWarmup = warmup[id];
      let intervalId;

      for (let i = 0; i < currentWarmup.length; i++) {
        const { start, end } = currentWarmup[i];

        if (currentTime >= start && currentTime <= end) {
          intervalId = setInterval(() => {
            updateData();
          }, 1000);
          break;
        }
      }

      if (!intervalId) {
        intervalId = setInterval(() => {
          updateData();
        }, 10000);
      }

      intervalsRef.current.push(intervalId);
    };

    updateDataInterval();

    return () => {
      intervalsRef.current.forEach(interval => {
        clearInterval(interval);
      });
      intervalsRef.current = [];
    };
  }, []);

  return (
    <div>
      <div className={styles.chart}>
        <div>{chart[id].text}</div>
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
          <YAxis />
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
          <Bar dataKey="amount" fill="orange" isAnimationActive={false}>
            {data?.map((el, index) => (
              <Cell key={`cell-${index}`} fill={get_fill(el['amount'])} />
            ))}
          </Bar>
          <Tooltip />
        </BarChart>
      </div>
      <div className={styles.accord}>
        <Stats people={data?.[14]?.['amount']} />
      </div>
    </div>
  );
};

export default ChartDatabase;
