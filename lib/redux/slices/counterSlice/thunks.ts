/* Instruments */
import { ReduxThunkAction, incrementByAmount } from "@/lib/redux";

export const incrementIfOddAsync =
  (amount: number): ReduxThunkAction =>
  (dispatch) => {
    // update only if currentValue is odd
    if (amount % 2 != 0) {
      dispatch(incrementByAmount(amount))
    }
  };
