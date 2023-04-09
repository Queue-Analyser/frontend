import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { fetchData } from './api/data';
import '../styles/Chart.css'

const ChartNow = () => {
  const [data, setData] = useState([]);

  const updateData = async () => {
    const newPeople = await fetchData();
    const newData = [...data.slice(-15), { time: new Date().toLocaleTimeString(), people: newPeople }];
    setData(newData);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateData();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data]);

  const getFill = (people) => {
    if (people < 5) {
      return '#21d927';
    } else if (people >= 5 && people <= 15) {
      return '#f2b007';
    } else {
      return '#e82e2e';
    }
  };

  return (
    <div className='chart-box'>
      <div className='chart-text'>Загруженность столовой в последние 15 минут</div>
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
        barCategoryGap={1} margin={{ left: -10 }}
      >
        <XAxis dataKey="time" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Bar dataKey="people" fill="orange" isAnimationActive={false}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={getFill(entry.people, index)} />
          ))}
        </Bar>
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default ChartNow;
