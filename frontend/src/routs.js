import { CHART_1, CHART_2, CHART_3, CHART_4 } from "./utils/consts";
import ChartNow from './components/Chart/ChartNow'
import ChartDatabase from './components/Chart/ChartDatabase'
import Chart3 from './components/Chart/Chart3'
import Chart4 from './components/Chart/Chart4'

export const chartRoutes = [
    {
        path: CHART_1,
        Component: ChartNow 
    },
    {
        path: CHART_2,
        Component: ChartDatabase
    },
    {
        path: CHART_3,
        Component: Chart3
    },
    {
        path: CHART_4,
        Component: Chart4
    } 
]