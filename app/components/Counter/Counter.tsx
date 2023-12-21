"use client";


/* Instruments */
import { useSelector, selectCount, decrement, increment, incrementByAmount, incrementIfOddAsync, ReduxThunkAction, ReduxDispatch } from "@/lib/redux";
import styles from "./counter.module.css";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";

export const Counter = () => {
  const count = useSelector(selectCount);

  const [amount, setAmount] = useState<string | number | string[]>('');

  const dispatch = useDispatch<any>();

  const handleOnInputAmount = (event: any) => {
    if (event.code === 'Enter') {
      handleAmountInput(event)
      submitAddAmount()
    }
  }

  const handleAmountInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    if (!isNaN(+value)) {
      setAmount(+value)
    } else {
      setAmount('')
    }
  }

  const submitAddAmount = () => {
    if (!Number.isNaN(amount)) {
      dispatch(incrementByAmount(+amount));
      setAmount('')
    }
  }

  const handleAddIfOdd = () => {
    if (!Number.isNaN(amount)) {
      dispatch(incrementIfOddAsync(+amount));
      setAmount('');
    }
  }

  // Create a state named incrementAmount
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} value={amount} onKeyUp={handleOnInputAmount} onChange={handleAmountInput} aria-label="Set increment amount" />
        <button
          className={styles.button}
          onClick={submitAddAmount}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={handleAddIfOdd}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
