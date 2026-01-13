/* Core */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  counter: 1,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decreament, incrementByAmount loginc here
    increment: (state) => {
        state.value = state.value + state.counter;
    },
    decreament: (state) => {
      state.value = state.value - state.counter;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    }
  }
});

/* Types */
export interface CounterSliceState {
  value: number;
  counter: number;
  status: "idle" | "loading" | "failed";
}

export const { increment, decreament, incrementByAmount } = counterSlice.actions;