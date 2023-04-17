import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ChartDatabase from './ChartDatabase'

const RouteChart = () => {
    return (
            <Routes >
                <Route path="/chart/1" element={<ChartDatabase />} />
                <Route path="/chart/2" element={<ChartDatabase />} />
                <Route path="/chart/3" element={<ChartDatabase />} />
                <Route path="/chart/4" element={<ChartDatabase />} />
                <Route path='*' element={<Navigate to="/chart/1"/>} />
            </Routes>
    );
};

export default RouteChart;