import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../styles/Chart.css'

const Chart = () => {
    const [random, setRandom] = useState(0)
    // const [quantity, setQuantity] = useState([7, 15, 6, 5, 3, 7])
    const quantity = useSelector(state => state.quantity.data)

    useEffect(() => {
    setTimeout(() => {
        (Math.random() * 100) % 2 < 1 && random > 0
        ? setRandom(random - 1) 
        : setRandom(random + 1);
        return random
    }, 1000);
        }) 

    const data = [{
                    name: '10:00',
                    people: quantity[0],  //размер одной свечи
                },
                {
                    name: '11:00',
                    people: quantity[1],
                },
                {
                    name: '12:00',
                    people: quantity[2],
                },
                {
                    name: '13:00',
                    people: quantity[3],
                },
                {
                    name: '14:00',
                    people: quantity[4],
                },
                {
                    name: '15:00',
                    people: quantity[5],
                },
                {
                    name: '16:00',
                    people: random,
                },
            ]

    return (
        <div className='chart-box'>
            <h1 className='header_text'>Загруженность столовой</h1>
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
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="people" fill="orange" background={{ fill: '#eee' }} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;