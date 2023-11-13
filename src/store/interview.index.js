import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trackingNumber: '',
    usersList: []
}

const interviewSlice = createSlice({
    name: 'interview',
    initialState: initialState,
    reducers: {

        setTrackingNumber(state, action) {
            return { ...state, trackingNumber: action.payload }
        },

        setUsersList(state, action) {
            return { ...state, usersList: action.payload }
        }
    }
});

export const interviewActions = interviewSlice.actions;
export default interviewSlice.reducer;