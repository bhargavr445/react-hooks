import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './outcomes.index';
import problemsReducer from './problems.index';


const store = configureStore({
    reducer: {
        counterState: counterReducer,
        problemsState: problemsReducer
        // next slices needs to be added here
    }
});

export default store;
