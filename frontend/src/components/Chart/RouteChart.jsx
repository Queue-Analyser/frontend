import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { router } from '../../routs';

const RouteChart = () => {
    return (
            <Routes>
                {router.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>)
                }
                <Route path='*' element={<Navigate to="/chart/0"/>} />
            </Routes>
    );
};

export default RouteChart;