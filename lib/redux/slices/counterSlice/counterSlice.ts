/* Core */
import { createSlice } from '@reduxjs/toolkit';

const initialState: CounterSliceState = {
  value: 0,
  status: 'idle',
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // increment, decreament, incrementByAmount loginc here
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

/* Types */
export interface CounterSliceState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}
