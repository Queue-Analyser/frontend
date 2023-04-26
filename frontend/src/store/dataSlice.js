import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData2 = createAsyncThunk(
    'data2/fetchData',
    async function() {
        try {
            const response = await fetch('http://127.0.0.1:8080/getCurrentValue');
            const data2 = await response.json();
            return data2;
          } catch (error) {
            console.log(error);
            throw error;
          }
    }
)


const testSlice = createSlice({
    name: 'data2',
    initialState: {
        data2: [],
        status: null,
        error: null,
    },
    reducers: {
        dataReducer(state, action) {
            state.data2.push({
            time: new Date().toLocaleTimeString(), 
            people: action.payload.text
            })
        },
    },
    extraReducers: {
        [fetchData2.pending]: (state) => {
            state.status = 'loading';
            state.error = null;
        },
        [fetchData2.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.data = action.payload
        },
        [fetchData2.rejected]: (state, action) => {}
    }
})

export const {testReducer} = testSlice.actions
export default testSlice.reducer