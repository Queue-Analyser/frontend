import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { chartRoutes } from '../../routs';
import { CHART_1 } from '../../utils/consts';

const RouteChart = () => {
    return (
            <Routes >
                {chartRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>} exact/>
                )}
                <Route path='*' element={<Navigate to={CHART_1}/>} />
            </Routes>
    );
};

export default RouteChart;