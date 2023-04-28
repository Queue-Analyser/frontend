import { createSlice } from "@reduxjs/toolkit";



const testSlice = createSlice({
    name: 'chart',
    initialState: {
        chart: [
            {path: '/chart/0', text: 'ГЗ 1 этаж', id: 1},
            {path: '/chart/1', text: 'ГЗ 3 этаж', id: 2},
            {path: '/chart/2', text: 'УЛК 5 этаж', id: 3},
            {path: '/chart/3', text: 'УЛК 2 этаж', id: 4},
        ],
    },
    reducers: {
    
    },
    
})

export const {testReducer} = testSlice.actions
export default testSlice.reducer