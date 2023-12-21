/* Core */
import { createSlice } from "@reduxjs/toolkit";
import { incrementIfOddAsync } from "../..";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
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
    }
  }
});

export const { increment, decrement, incrementByAmount, setStatus } = counterSlice.actions

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
