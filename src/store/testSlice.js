import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
    name: 'quantity',
    initialState: {
        quantity: [7, 15, 6, 5, 3, 7] 
    },
    reducers: {
        quantityReducer(state, action) {
            console.log(state);
            console.log(action);

        //    state.quantity.push({
        //     num: action.payload.num
        //    }) 
        },
    }
})

export const {testReducer} = testSlice.actions
export default testSlice.reducer