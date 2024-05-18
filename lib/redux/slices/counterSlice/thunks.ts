/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from './counterSlice';
import { selectCount } from './selectors';

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch, getState) => {
    const currentState = getState();
    const currentValue = selectCount(currentState);

    // updates only if currentValue is odd
    if (currentValue % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
  };


  export default incrementIfOddAsync;