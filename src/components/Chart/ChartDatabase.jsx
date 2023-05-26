import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material'
import { getDataFromDb } from '../../api/getDataFromDb';
import { getLastElementsJson } from '../../map/getLastElementsJson';

import Stats from './Stats';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Chart from './Chart';

const ChartDatabase = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [stats, setStats] = useState([]);
  const chart = useSelector(state => state.chart.chart);

  const updateData = async () => {
    const updatedData = await getDataFromDb();
    const updatedStats = getLastElementsJson(updatedData);
    setStats(updatedStats);
    setData(updatedData);
  };

  useEffect(() => {
    const fetchDataAndUpdate = async () => {
      const initialData = await getDataFromDb();
      const stats = getLastElementsJson(initialData);
      setStats(stats);
      setData(initialData);
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
    <Box>
      <Chart text={chart[id].text} data={data[id]} />
      <Stats people={stats} id={id} />
    </Box>
  );
};

export default ChartDatabase;
