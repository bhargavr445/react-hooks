import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    moduleName: 'Problems Module',
}

const problemsSlice = createSlice({
    name: 'problems',
    initialState: initialState,
    reducers: {

        incrementBy(state, action) {
            return {
                ...state,
                moduleName: action.payload
            };
        }
    }
})

export const problemsActions = problemsSlice.actions;
export default problemsSlice.reducer;
