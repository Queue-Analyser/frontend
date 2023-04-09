import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'quantity',
    initialState: {
        data: [7, 15, 6, 5, 3, 7] 
    },
    reducers: {
        quantityReducer(state, action) {
            console.log(state);
            console.log(action);
        },
    }
})

export const {testReducer} = testSlice.actions
export default testSlice.reducer