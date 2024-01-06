"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, useDispatch } from "@/lib/redux";
import { selectCount, increment, decrement, incrementByAmount } from "@/lib/redux/slices/counterSlice";
import styles from "./counter.module.css";
import { incrementIfOddAsync } from "@/lib/redux";
import { INCREMENT_AMOUNT_ERROR_MESSAGE, ADD_IF_ODD_ERROR_MESSAGE, ADD_AMOUNT, ADD_IF_ODD } from '../../constant';

export const Counter = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  // Create a state named incrementAmount
  const [incrementAmount, setIncrementAmount] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState('');

  const handleNotification = (message: string) => {
    setNotificationMessage(message);
    setTimeout(() => {
      setNotificationMessage('');
    }, 5000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(decrement());
            // Clear the message when incrementing
            setNotificationMessage('');
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
            dispatch(increment());
            // Clear the message when incrementing
            setNotificationMessage(''); 
          }}
        >
          +
        </button>
      </div>
      <div className={`${styles.row} ${styles.adaptiveRow}`} >
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value))}
        />
        <div className={styles.btnWrapper}>
        <button
          className={styles.button}
          onClick={() => {
            // Check if incrementAmount is 0
            if (incrementAmount === 0) {
              handleNotification(INCREMENT_AMOUNT_ERROR_MESSAGE);
              return;
            }

            // dispatch event to add incrementAmount to count
            dispatch(incrementByAmount(incrementAmount));
            // Clear the message when normal add
            setNotificationMessage('');
            setIncrementAmount(0);
          }}
        >
          {ADD_AMOUNT}
        </button>
        <button
          className={styles.button}
          onClick={() => {
            // dispatch event to add incrementAmount only if count is odd
            if (incrementAmount !== 0 && count % 2 !== 0) {
              dispatch(incrementIfOddAsync(incrementAmount));
              // Clear the message when successfully adding if odd
              setNotificationMessage('');
              setIncrementAmount(0);
            } else {
              handleNotification(incrementAmount === 0 ? INCREMENT_AMOUNT_ERROR_MESSAGE : ADD_IF_ODD_ERROR_MESSAGE);
            }
          }}
        >
          {ADD_IF_ODD}
        </button>
        </div>
        
      </div>
      {notificationMessage && <p className={`${styles.row} ${styles.notificationText}`}>{notificationMessage}</p>}
    </div>
  );
};
