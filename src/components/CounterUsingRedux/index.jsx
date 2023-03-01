import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Actions";

const CounterRedux = () => {
  const balance = useSelector((state) => state.Balance);
  console.log("Balance: ", balance);
  const dispatch = useDispatch();
  return (
    <div>
      <span>{balance}</span>
      <Button variant="contained" onClick={() => dispatch(increment(100))}>
        DEBIT
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrement(100))}>
        CREDIT
      </Button>
    </div>
  );
};

export default CounterRedux;
