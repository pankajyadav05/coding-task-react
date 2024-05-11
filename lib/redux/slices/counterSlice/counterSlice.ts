/* Core */
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
  error: {
    hasError: false,
    errorMessage: ''
  },
  success: {
    message: ''
  }
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError:(state, action) => {
      state.error.hasError = action.payload.hasError;
      state.error.errorMessage = action.payload.errorMessage;
    },
    setSuccess: (state, action) => {
      state.success.message = action.payload
    }
  }
});

export const { increment, decrement, incrementByAmount, setStatus, setSuccess, setError } = counterSlice.actions

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
  error: {
    hasError: boolean,
    errorMessage: string
  },
  success: {
    message: string
  }
}
