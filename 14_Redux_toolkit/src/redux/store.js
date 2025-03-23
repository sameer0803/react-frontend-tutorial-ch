import {configureStore} from '@reduxjs/toolkit';
import todoreducer from '../features/Todo/TodoSlice';

export const store = configureStore({
    reducer:todoreducer    
})
