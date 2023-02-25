import React from "react";
import { createSlice } from "@reduxjs/toolkit";


const RootSlice= createSlice({
    name: 'root',
    initialState: {
        year:'Year',
        make: 'Make',
        model: 'Model',
        value: 'Value'
    },
    reducers: {
        chooseyear: (state, action) => { state.year = action.payload },
        choosemake: (state, action) => { state.make = action.payload },
        choosemodel: (state, action) => { state.model = action.payload },
        choosevalue:(state, action) => { state.value = action.payload }
    }
})

export const reducer = RootSlice.reducer;
export const { chooseyear, choosemake, choosemodel, choosevalue } = RootSlice.actions;