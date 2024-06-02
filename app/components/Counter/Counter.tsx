"use client";

/* Core */
import { useRef, useState } from "react";

/* Instruments */
import { useSelector, selectCount, increment, decreament, incrementByAmount, incrementIfOddAsync } from "@/lib/redux";

import { useDispatch } from "@/lib/redux/store";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Create a state named incrementAmount
  const ammount = useRef<HTMLInputElement>(null)
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            dispatch(decreament())
            // dispatch event to decrease count by 1
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            dispatch(increment())
            // dispatch event to increment count by 1
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} type="number" aria-label="Set increment amount" ref={ammount} />
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementByAmount(Number(ammount.current?.value)))
            // dispatch event to add incrementAmount to count
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            dispatch(incrementIfOddAsync(Number(ammount.current?.value)))
            // dispatch event to add incrementAmount only if count is odd
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
