import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { getCurrentValue } from '../../api/getCurrentValue';
import { getDataFromDb } from '../../api/getDataFromDb';
import { get_fill } from '../../utils/get_fill';

import styles from '../../styles/Chart.module.css'
import Stats from './Stats';
import { useParams } from 'react-router-dom';
import { useSelector } from "react-redux";

const ChartDatabase = () => {
    const { id } = useParams()    
    const [data, setData] = useState([]);
    const chart = useSelector(state => state.chart.chart)
    
    const updateData = async () => {
      const newPeople = await getCurrentValue(id);
      const newData = [...data.slice(-14), newPeople[id]];
      setData(newData);
      localStorage.setItem(`data_${id}`, JSON.stringify(newData));
    };
  
    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem(`data_${id}`));
      if (savedData) {
        setData(savedData);
      } else {
        const fetchDataAndUpdate = async () => {
          const initialData = await getDataFromDb();
          setData(initialData[id]);
          localStorage.setItem(`data_${id}`, JSON.stringify(initialData));
        };
        fetchDataAndUpdate();
      }
    }, []);
  
  
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [warmup, setWarmup] = useState([
                                          {start: "10:05:00", end: "10:15:00"},
                                          {start: "11:50:00", end: "12:00:00"},
                                          {start: "13:35:00", end: "13:50:00"},
                                          {start: "15:25:00", end: "15:40:00"},
                                          {start: "17:15:00", end: "17:25:00"},
                                          {start: "19:00:00", end: "19:10:00"},
                                        ])                           
    useEffect(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      for(let i = 1; i <= warmup.length; i++){
        if (currentTime >= warmup[i].start && currentTime <= warmup[i].end) {
               const intervalId = setInterval(() => {
                 updateData();
               }, 1000);
               return () => {
                 clearInterval(intervalId);
               };
        } else {
          const intervalId = setInterval(() => {
            updateData();
          }, 10000);
          return () => {
            clearInterval(intervalId);
          };
        }
      }
      
    }, [data]);

   
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
          <Stats people={data?.[14]?.['amount']}/>
        </div>
      </div>
  
    );
  };
  
export default ChartDatabase;
