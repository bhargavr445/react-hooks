import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    decrement: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {

        increment(state) {
            return {
                ...state,
                counter: state.counter + 1
            };
        },


        decrement(state) {
            return {
                ...state,
                counter: state.counter - 1
            };
        },
        
        
        incrementBy(state, action) {
            return {
                ...state,
                counter: state.counter + action.payload
            };
        }
    }
})

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
