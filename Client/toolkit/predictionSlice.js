import { createSlice } from "@reduxjs/toolkit";

export const predictionSlice = createSlice({
    name:'prediction',
    initialState:{
        predictions: {},
        isReady: false,
    },
    reducers:{
        addPrediction:(state, action) =>{
            isReady= true;
            predictions = action.payload;
        }
    }
})