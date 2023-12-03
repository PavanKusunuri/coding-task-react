"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import { useSelector, useDispatch, selectCount, increment, decrement, incrementByAmount, incrementIfOddAsync } from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);

  // Create a state named incrementAmount

  const [ incrementAmount, setIncrementAmount] = useState<number>(0)
  const dispatch = useDispatch();
  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => 
            // dispatch event to decrease count by 1
            dispatch(decrement())
          }
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => 
            // dispatch event to increment count by 1
            dispatch(increment())
          }
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} type="text" aria-label="Set increment amount" value={incrementAmount} onChange={e => setIncrementAmount(Number(e.target.value))} />
        <button
          className={styles.button}
          onClick={() => 
            // dispatch event to add incrementAmount to count
            dispatch(incrementByAmount(Number(incrementAmount)))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => 
            // dispatch event to add incrementAmount only if count is odd
            dispatch(incrementIfOddAsync(incrementAmount))
          }
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
