import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import '../../styles/Chart.css'

const Chart4 = () => {
    const [quantity] = useState([0, 0, 0, 7, 19, 8])

    // const quantity = useSelector(state => state.quantity.data)
    // const url = `http://127.0.0.1:5000/getCurrentValue`;
    // setRandom(min + (Math.random() * (max-min))) 
    // useEffect(() => {
    // setTimeout(() => {
    //     fetch(url)
    //     .then(response => response.text())
    //     .then(data => {
    //         setRandom(data);
    //     })
    //     }, 1000);
    // }) 
    
// ==============================================TEST========================================================================
    const [time] = useState(10)
    // setTime(10)

    const [queue1, setQueue1] = useState(0)
    const [queue2, setQueue2] = useState(0)
    const [queue3, setQueue3] = useState(0)

    let max = 10
    let min = 1
    // setRandom(min + (Math.random() * (max-min)))

    
    function funcAll() {
        if (time === 10) {
            setQueue1(min + (Math.random() * (max-min)))
        }
        if (time === 20) {
            setQueue2(min + (Math.random() * (max-min)))
        }
        if (time === 30) {
            setQueue3(min + (Math.random() * (max-min)))
        }
        return 
    }
    
   useEffect(() => {
      funcAll()  
   })

// ==============================================TEST========================================================================
    
    


          

   
    const data = [{
                    name: '10:00',
                    people: queue1,  //размер одной свечи
                },
                {
                    name: '11:00',
                    people: queue2,
                },
                {
                    name: '12:00',
                    people: queue3,
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
                    people: quantity[5],
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

export default Chart4;