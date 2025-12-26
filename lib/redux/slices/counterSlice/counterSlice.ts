/* Core */
import {createSlice} from "@reduxjs/toolkit";

const initialState: CounterSliceState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // increment, decrement, incrementByAmount logic here
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // increments amount based on the value entered in input box in Counter.tsx file
    incrementByAmount: (state, action) => {
      state.value += action?.payload
    }
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}
