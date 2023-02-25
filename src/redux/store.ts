import React from 'react';
import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './slices/RootSlice';

//remember this is the redux version of state


export const store = configureStore({
    reducer,
    devTools: true
})
