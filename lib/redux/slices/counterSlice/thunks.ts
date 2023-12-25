/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import {incrementByAmount} from "@/lib/redux";
import {fetchIdentityCount} from "@/lib/redux/slices/counterSlice/fetchIdentityCount";

export const incrementIfOddAsync =
    (amount: number): ReduxThunkAction =>
        async (dispatch, getState) => {
          // update only if currentValue is odd
          const { counter } = getState();
          await fetchIdentityCount(amount)
          if (counter?.value % 2 === 0) {
            return
          }
          // uses incrementByAmount as it has the same logic
          // increments the amount based on the value entered in input in Counter.tsx file
          dispatch(incrementByAmount(amount))
        };
