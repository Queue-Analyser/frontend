import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Chart.css'

const Chart = () => {
var min = 100;
var max = 5000;
const [random, setRandom] = useState(0)

useEffect(() => {
  setTimeout(() => {
      setRandom(min + (Math.random() * (max-min))) 
      return random
  }, 5000);
    }) 
  

console.log(random);

// const [now, setNow] = useState(0)
// setNow(moment().format('DD.MM.YYYY'))


// console.log(moment().format('DD.MM.YYYY'));
const [quantity, setQuantity] = useState([2000, 4000, 4000, 2223, 1000, 3000])

const data = [
{
  name: '10:00',
    // uv: 4000,
    people: quantity[0],  //размер одной свечи
    // amt: 2400,
},
{
  name: '11:00',
  // uv: 3000,
  people: quantity[1],
  // amt: 2210,
},
{
  name: '12:00',
  // uv: 2000,
  people: quantity[2],
  // amt: 2290,
},
{
  name: '13:00',
  // uv: 2780,
  people: quantity[3],
  // amt: 2000,
},
{
  name: '14:00',
  // uv: 1890,
  people: quantity[4],
  // amt: 2181,
},
{
  name: '15:00',
  // uv: 2390,
  people: quantity[5],
  // amt: 2500,
},
{
  name: '16:00',
  // uv: 3490,
  people: random,
  // amt: 2100,
},

]
return (
  <div className='chart-box'>
  <h1 className='food'>Когда покушать?</h1>
    <ResponsiveContainer width="100%" height="100%">
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
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 20 }} />
        <YAxis />
        {/* <Tooltip styles = {{ border: '1px solid rgba(184, 39, 39, 1)',}}/> */} 
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar dataKey="people" fill="orange" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
};

export default Chart;