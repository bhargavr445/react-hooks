import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './outcomes.index';
import problemsReducer from './problems.index';
import interviewReducer from './interview.index';


const store = configureStore({
    reducer: {
        counterState: counterReducer,
        problemsState: problemsReducer,
        interviewState: interviewReducer
        // next slices needs to be added here
    }
});

export default store;
