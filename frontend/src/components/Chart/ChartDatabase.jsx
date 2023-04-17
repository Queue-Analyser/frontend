import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell } from 'recharts';
import { fetchData } from '../../api/data';
import '../../styles/Chart.css'
import Stats from './Stats';
import styles from '../../styles/MainPage.module.css'
import { useLocation } from 'react-router-dom';

const ChartDatabase = (props) => {
    const [data, setData] = useState([]);


    const updateData = async () => {
      const newPeople = await fetchData();
      const newData = [...data.slice(-14), { time: new Date().toLocaleTimeString(), people: newPeople }];
      setData(newData);
      localStorage.setItem('data', JSON.stringify(newData));
    };
  
    useEffect(() => {
      const savedData = JSON.parse(localStorage.getItem('data'));
      if (savedData) {
        setData(savedData);
      } else {
        const fetchDataAndUpdate = async () => {
          const newPeople = await fetchData();
          const initialData = [{ time: new Date().toLocaleTimeString(), people: newPeople }];
          setData(initialData);
          localStorage.setItem('data', JSON.stringify(initialData));
        };
        fetchDataAndUpdate();
      }
    }, []);
  
  
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
    const [warmup, setWarmup] = useState("3:40:00")
  
    // const Boost = () => {
    //   setCurrentTime(new Date().toLocaleTimeString());
    //   if (currentTime >= warmup) {
    //     const intervalId = setInterval(() => {
    //       updateData();
    //     }, 1000);
    //     return () => {
    //       clearInterval(intervalId);
    //     };
    //   } else {
    //     const intervalId = setInterval(() => {
    //       updateData();
    //     }, 5000);
    //     return () => {
    //       clearInterval(intervalId);
    //     };
    //   }
    // };
  
  
  
    useEffect(() => {
      setCurrentTime(new Date().toLocaleTimeString());
      console.log(currentTime, warmup)
      if (currentTime >= warmup) {
        const intervalId = setInterval(() => {
          updateData();
        }, 1000);
        return () => {
          clearInterval(intervalId);
        };
      } else {
        const intervalId = setInterval(() => {
          updateData();
        }, 5000);
        return () => {
          clearInterval(intervalId);
        };
      }
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


    const location = useLocation()
    let text

    if (location.pathname === "/chart/1") {
      text = "Stats1";
    } else if (location.pathname === "/chart/2") {
      text = "Stats2";
    } else if (location.pathname === "/chart/3") {
      text = "Stats3";
    } else if (location.pathname === "/chart/4") {
      text = "Stats4";
    }
  
    return (
      <div>
      
        <div className='chart-box'>
          <div className='chart-text'>Загруженность столовой в последние 30 секунд</div>
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
            <Bar dataKey="people" fill="orange" isAnimationActive={false}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={getFill(entry.people, index)} />
              ))}
            </Bar>
            <Tooltip />
          </BarChart>
        </div>
        <div className={styles.accord}>
          <Stats text={text} />
          
        </div>
      </div>
  
    );
  };
  
export default ChartDatabase;