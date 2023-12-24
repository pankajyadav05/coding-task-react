"use client";

/* Core */
import {ChangeEvent, useState} from "react";

/* Instruments */
import {
  useSelector,
  selectCount,
  increment,
  decrement,
  useDispatch,
  incrementIfOddAsync,
  incrementByAmount
} from "@/lib/redux";

import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState<number>(Number(''))

  const handleIncrementAmountChange = (e:ChangeEvent<HTMLInputElement>) => {
    const value = Number(e?.currentTarget?.value);
    //checks if the value is a number to prevent entering alphabets and symbols
    if(!isNaN(value)){
      setIncrementAmount(value);
    }
  }

  const isValidInput = incrementAmount > 0;

  return (
      <div>
        <div className={styles.row}>
          <button
              className={styles.button}
              aria-label="Decrement value"
              onClick={() => {
                // prevents the count to go below 0
                if(count === 0) return;
                // dispatch event to decrease count by 1
                dispatch(decrement())
              }}
          >
            -
          </button>
          <span className={styles.value}>{count}</span>
          <button
              className={styles.button}
              aria-label="Increment value"
              onClick={() => {
                // dispatch event to increment count by 1
                dispatch(increment())
              }}
          >
            +
          </button>
        </div>
        <div className={styles.row}>
          <input className={styles.textBox} type="number" value={incrementAmount} aria-label="Set increment amount" onChange={handleIncrementAmountChange}/>
            <button
                className={styles.button}
                onClick={() => {
                  // dispatch event to add incrementAmount to count
                  // check prevents unnecessary event dispatch
                  if(incrementAmount) {
                    dispatch(incrementByAmount(incrementAmount || 0))
                  }
                }}
            >
              Add Amount
            </button>
            <button
                className={styles.button}
                onClick={() => {
                  // dispatch event to add incrementAmount only if count is odd
                  // check prevents unnecessary event dispatch
                  if(incrementAmount > 0) {
                    dispatch(incrementIfOddAsync(incrementAmount))
                  }
                }}
            >
              Add If Odd
            </button>
        </div>
      </div>
  );
};
