/* Instruments */
import { ReduxState, ReduxThunkAction } from '@/lib/redux';
import { incrementByAmount } from './counterSlice';

export const incrementIfOddAsync =(amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentState: ReduxState = getState();
    const currentValue = currentState.counter.value;
    if (currentValue % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
  };
