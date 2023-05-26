import React, { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material'
import { getDataFromDb } from '../../api/getDataFromDb';
import { getLastElementsJson } from '../../map/getLastElementsJson';
import { WARM_UP } from "../../utils/consts";
import { getTimeFromString } from '../../utils/date_format';

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
      const currentTime = new Date();

      const currentWarmup = WARM_UP[0];
      let intervalId;

      for (let i = 0; i < currentWarmup.length; i++) {
        const { start, end } = currentWarmup[i];
        const startDate = getTimeFromString(start);
        const endDate = getTimeFromString(end);
  
        if (currentTime >= startDate && currentTime <= endDate) {
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
  }, [data]);

  return (
    <Box>
      <Chart text={chart[id].text} data={data[id]} />
      <Stats people={stats} id={id} />
    </Box>
  );
};

export default ChartDatabase;
