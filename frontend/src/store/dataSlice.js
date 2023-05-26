import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name: 'chart',
    initialState: {
        chart: [
            {path: '/chart/0', text: 'ГЗ 1 этаж', id: 0},
            {path: '/chart/1', text: 'ГЗ 3 этаж', id: 1},
            {path: '/chart/2', text: 'УЛК 5 этаж', id: 2},
            {path: '/chart/3', text: 'УЛК 2 этаж', id: 3},
        ],
    },
    reducers: {
    
    },
    
})

export const {chartReducer} = chartSlice.actions
export default chartSlice.reducer