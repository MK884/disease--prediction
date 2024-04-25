import { createSlice } from "@reduxjs/toolkit";

import {
  UPLOAD_IMAGE_FAILURE,
  UPLOAD_IMAGE_REQUEST,
  UPLOAD_IMAGE_SUCCESS,
} from "./hook/useModel.js";

export const predictionSlice = createSlice({
  name: "prediction",
  initialState: {
    predictions: null,
    isReady: false,
    error: null,
  },
  reducers: {
    addPrediction: (state, action) => {
      // console.log(action.payload.type);
      if (action.payload.type === UPLOAD_IMAGE_SUCCESS) {
        state.isReady = true;
        state.predictions = action.payload;
      }
    },
  },
});

export const { addPrediction } = predictionSlice.actions;

export default predictionSlice.reducer;
