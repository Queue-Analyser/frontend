import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import '../../styles/Chart.css'

const ChartNow = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('http://127.0.0.1:5000/getCurrentValue')
      .then(response => response.json())
      .then(responseData => {
        const newData = [...data, { time: new Date().toLocaleTimeString(), people: responseData }];
        setData(newData);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [data]);

  return (
    <BarChart width={800} height={400} data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
        }}
        barSize={20}>
      <XAxis dataKey="time" />
      <YAxis />
      <CartesianGrid stroke={"#eee"} strokeDasharray="5 5" />
      <Bar dataKey="people" fill="orange" background={{ fill: '#eee' }}/>
      <Tooltip />
    </BarChart>
  );
};

export default ChartNow;
