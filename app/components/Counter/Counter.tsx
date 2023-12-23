"use client";


/* Instruments */
import { useSelector, selectCount, decrement, increment, incrementByAmount, incrementIfOddAsync } from "@/lib/redux";
import styles from "./counter.module.css";
import { useDispatch } from "react-redux";
import { ChangeEvent, useState } from "react";

export const Counter = () => {
  const count = useSelector(selectCount);
  const status = useSelector(state => state.counter.status)

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
    if(amount == '') {
      return;
    }
    if (!Number.isNaN(amount)) {
      dispatch(incrementByAmount(+amount));
      setAmount('')
    }
  }

  const handleAddIfOdd = () => {
    if(amount == '') {
      return;
    }
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
          data-testid="decrement-button"
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span data-testid="count" className={styles.value}>{count}</span>
        <button
          data-testid="increment-button"
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} data-testid="amount-input" value={amount} onKeyUp={handleOnInputAmount} onChange={handleAmountInput} aria-label="Set increment amount" />
        <button
          aria-label="Add Amount"
          className={styles.button}
          onClick={submitAddAmount}
        >
          Add Amount
        </button>
        <button
          aria-label="Add If Odd"
          className={styles.button}
          onClick={handleAddIfOdd}
          disabled={status === 'loading'}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
