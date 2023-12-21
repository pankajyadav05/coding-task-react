/* Instruments */
import { incrementByAmount, setStatus, type ReduxThunkAction } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  async(dispatch, getState) => {
    // update only if currentValue is odd
    const state = getState();
    dispatch(setStatus('loading'))
    await fakeAPI();
    if(state.counter.value % 2 !== 0) {
      dispatch(incrementByAmount(amount))
      dispatch(setStatus('idle'))
    }
  };

  async function fakeAPI() {
    return new Promise((resolve) => {
      return setTimeout(resolve, 1000)
    })
  }
