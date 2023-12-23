/* Instruments */
import { POST } from "@/app/api/identity-count/route";
import { incrementByAmount, setStatus, type ReduxThunkAction } from "@/lib/redux";
import { NextResponse } from "next/server";

interface responseObj {
  data: any;
}

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
    async (dispatch, getState) => {
      // update only if currentValue is odd
      const state = getState();
      const request: Request = new Request('/', { method: 'POST', body: JSON.stringify({ amount: amount }) });
      const response: Response = new Response();
      dispatch(setStatus('loading'))
      const res: NextResponse = await POST(request, response);
      const resp: responseObj = await res.json();
      if (state.counter.value % 2 !== 0) {
        dispatch(incrementByAmount(resp.data))
      }
      dispatch(setStatus('idle'));
    };
