import ChartDatabase from "./components/Chart/ChartDatabase";
import { CHART_ROUTE } from "./utils/consts";



export const router = [
    {
        path: CHART_ROUTE + '/:id',
        Component: ChartDatabase
    }
]